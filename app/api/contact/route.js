import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_TO = "supportnova18@gmail.com";

const MAX_NAME_LEN = 100;
const MAX_EMAIL_LEN = 200;
const MAX_MESSAGE_LEN = 5000;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 min
const RATE_LIMIT_MAX = 3; // max submissions per IP per window
// Best-effort only: resets on cold start / doesn't share state across serverless instances.
// Enough to blunt casual spam without adding infra for a personal contact form.
const rateLimitBuckets = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(ip);
  if (!bucket || now - bucket.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitBuckets.set(ip, { windowStart: now, count: 1 });
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX;
}

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return Response.json({ error: "Trop de messages envoyés, réessaie plus tard." }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  // Honeypot: a real visitor never fills this hidden field. Pretend success so bots
  // don't learn to look for another field, but never actually send anything.
  if ((body?.website || "").toString().trim() !== "") {
    return Response.json({ ok: true });
  }

  let name = (body?.name || "").toString().trim();
  const email = (body?.email || "").toString().trim();
  const message = (body?.message || "").toString().trim();

  if (!name || !email || !message) {
    return Response.json({ error: "Nom, email et message sont requis." }, { status: 400 });
  }
  if (name.length > MAX_NAME_LEN || email.length > MAX_EMAIL_LEN || message.length > MAX_MESSAGE_LEN) {
    return Response.json({ error: "Un des champs dépasse la longueur autorisée." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Adresse email invalide." }, { status: 400 });
  }
  // Strip line breaks/control chars from name before it lands in the email subject —
  // it's interpolated directly, so a raw newline there would be a header-injection vector.
  name = name.replace(/[\r\n\t]+/g, " ").replace(/[^\S ]+/g, "").trim();
  if (!name) {
    return Response.json({ error: "Nom invalide." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "RESEND_API_KEY manquant côté serveur." }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: CONTACT_TO,
      replyTo: email,
      subject: `Contact portfolio — ${name}`,
      text: `De : ${name} <${email}>\n\n${message}`,
    });
    if (error) {
      return Response.json({ error: error.message || "Échec de l'envoi via Resend." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: err?.message || "Échec de l'envoi." }, { status: 500 });
  }
}

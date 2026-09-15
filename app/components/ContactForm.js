"use client";

import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldStyle = {
  width: "100%",
  background: "#101317",
  border: "1px solid #1c2024",
  borderRadius: "4px",
  padding: "12px 14px",
  color: "#eef1f0",
  fontFamily: "var(--font-fragment-mono), monospace",
  fontSize: "13.5px",
  outline: "none",
};

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  function update(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function validate() {
    if (!values.name.trim()) return "Le nom est requis.";
    if (!EMAIL_RE.test(values.email.trim())) return "L'adresse email n'est pas valide.";
    if (!values.message.trim()) return "Le message est requis.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setError(validationError);
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Échec de l'envoi.");
      }
      setStatus("sent");
      setValues({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message || "Échec de l'envoi.");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '480px', width: '100%'}}>
      {/* Honeypot — hidden from real visitors, bots that auto-fill every field get caught server-side */}
      <div aria-hidden="true" style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap'}}>
        <label htmlFor="contact-website">Site web</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={update("website")} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
        <label htmlFor="contact-name" style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '11.5px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7c8790'}}>
          Nom
        </label>
        <input id="contact-name" type="text" maxLength={100} value={values.name} onChange={update("name")} style={fieldStyle} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
        <label htmlFor="contact-email" style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '11.5px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7c8790'}}>
          Email
        </label>
        <input id="contact-email" type="email" maxLength={200} value={values.email} onChange={update("email")} style={fieldStyle} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
        <label htmlFor="contact-message" style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '11.5px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7c8790'}}>
          Message
        </label>
        <textarea id="contact-message" rows={5} maxLength={5000} value={values.message} onChange={update("message")} style={{...fieldStyle, resize: 'vertical', fontFamily: "var(--font-familjen-grotesk), sans-serif", fontSize: '14.5px'}} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '48px',
          padding: '0 24px',
          background: status === "sending" ? '#1c2024' : '#2dd8b8',
          color: status === "sending" ? '#7c8790' : '#06120f',
          fontWeight: '700',
          fontSize: '14.5px',
          borderRadius: '4px',
          border: 'none',
          cursor: status === "sending" ? 'default' : 'pointer',
        }}
      >
        {status === "sending" ? "Envoi…" : "Envoyer"}
      </button>

      {status === "error" && (
        <p role="alert" style={{margin: '0', fontSize: '13px', color: '#ff8b7a', fontFamily: "var(--font-fragment-mono), monospace"}}>
          {error}
        </p>
      )}
      {status === "sent" && (
        <p role="status" style={{margin: '0', fontSize: '13px', color: '#2dd8b8', fontFamily: "var(--font-fragment-mono), monospace"}}>
          Message envoyé, merci — réponse sous peu.
        </p>
      )}
    </form>
  );
}

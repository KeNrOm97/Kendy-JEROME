import { ImageResponse } from "next/og";

export const alt =
  "Kendy Jerome — Ingénieur systèmes & infrastructure. FreeBSD, Linux, Asterisk, réseaux chiffrés, déploiements automatisés.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0f12",
          color: "#eef1f0",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "26px",
            color: "#2dd8b8",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#2dd8b8",
            }}
          />
          Fort-de-France (972) · certifié Cisco CCNA
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: "76px", fontWeight: 700, lineHeight: 1.05 }}>
            Kendy Jerome
          </div>
          <div style={{ fontSize: "40px", color: "#b4bcc2", lineHeight: 1.25 }}>
            Ingénieur systèmes &amp; infrastructure
          </div>
        </div>
        <div style={{ fontSize: "26px", color: "#7c8790" }}>
          FreeBSD · Linux · Asterisk · WebRTC · Ansible · supervision
        </div>
      </div>
    ),
    { ...size }
  );
}

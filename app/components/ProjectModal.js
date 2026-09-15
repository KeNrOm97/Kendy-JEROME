"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project || typeof document === "undefined") return null;

  const { Diagram, image, imageAlt, title, kicker, tags, paragraphs, figcaption, link, linkLabel } = project;

  return createPortal(
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{position: 'fixed', inset: '0', zIndex: '100', background: 'rgba(6,8,10,0.72)', backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 'clamp(16px, 5vw, 48px)', overflowY: 'auto'}}
    >
      <div
        className="modal-panel rise"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{background: '#0d0f12', border: '1px solid #1c2024', borderRadius: '8px', maxWidth: '820px', width: '100%', margin: 'clamp(24px, 6vh, 64px) 0', padding: 'clamp(20px, 4vw, 36px)'}}
      >
        <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', paddingBottom: '14px'}}>
          <div>
            <div style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '11px', color: '#2dd8b8', textTransform: 'uppercase', letterSpacing: '.06em', paddingBottom: '8px'}}>
              {kicker}
            </div>
            <h2 style={{margin: '0', fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: '700', letterSpacing: '-0.015em', color: '#eef1f0'}}>
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            style={{flexShrink: '0', width: '36px', height: '36px', borderRadius: '4px', border: '1px solid #262b30', background: 'transparent', color: '#c7ccce', fontSize: '16px', cursor: 'pointer'}}
          >
            ×
          </button>
        </div>

        {paragraphs.map((p, i) => (
          <p key={i} style={{margin: i === 0 ? '0 0 12px 0' : '0 0 12px 0', fontSize: '15.5px', lineHeight: '1.65', color: '#b4bcc2'}}>
            {p}
          </p>
        ))}

        <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '6px 0 20px 0'}}>
          {tags.map((tag) => (
            <span key={tag} style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '11px', padding: '5px 10px', border: '1px solid #262b30', borderRadius: '3px', color: '#9aa3a9'}}>
              {tag}
            </span>
          ))}
        </div>

        {image ? (
          <div style={{border: '1px solid #1c2024', borderRadius: '6px', overflow: 'hidden'}}>
            <img src={image} alt={imageAlt || ""} style={{width: '100%', height: 'auto', display: 'block'}} />
          </div>
        ) : Diagram ? (
          <figure style={{border: '1px solid #1c2024', background: '#101317', borderRadius: '6px', padding: 'clamp(14px, 4vw, 24px)'}}>
            <div className="diagram">
              <Diagram />
            </div>
            {figcaption && (
              <figcaption style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '12px', color: '#7c8790', lineHeight: '1.6', paddingTop: '14px', borderTop: '1px solid #1c2024', marginTop: '12px'}}>
                {figcaption}
              </figcaption>
            )}
          </figure>
        ) : null}

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', marginTop: '18px', fontFamily: "var(--font-fragment-mono), monospace", fontSize: '13px', color: '#2dd8b8'}}>
            {linkLabel}
          </a>
        )}
        {!link && linkLabel && (
          <div style={{marginTop: '18px', fontFamily: "var(--font-fragment-mono), monospace", fontSize: '12px', color: '#7c8790'}}>
            {linkLabel}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

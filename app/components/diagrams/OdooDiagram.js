export default function OdooDiagram() {
  return (
    <svg viewBox="0 0 1010 280" role="img" aria-label="Cycle de vie d'un dossier de subvention : brouillon, déposé, en instruction, puis validé ou refusé ; l'instruction peut renvoyer le dossier en brouillon quand un complément est demandé." style={{width: '100%', height: 'auto', display: 'block'}}>
      <defs>
        <marker id="stO" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#dde3e5" />
        </marker>
        <marker id="stoO" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#2dd8b8" />
        </marker>
      </defs>
      <circle cx="16" cy="102" r="6" fill="#dde3e5" />
      <g fill="none" stroke="#dde3e5" strokeWidth="2">
        <rect x="40" y="76" width="150" height="52" rx="3" />
        <rect x="250" y="76" width="150" height="52" rx="3" />
        <rect x="460" y="76" width="170" height="52" rx="3" />
        <rect x="790" y="24" width="150" height="52" rx="3" />
        <rect x="790" y="140" width="150" height="52" rx="3" />
      </g>
      <g fontFamily="var(--font-familjen-grotesk), sans-serif" fontSize="14" fill="#dde3e5" textAnchor="middle">
        <text x="115" y="107">Brouillon</text>
        <text x="325" y="107">Déposé</text>
        <text x="545" y="107">En instruction</text>
        <text x="865" y="55">Validé</text>
        <text x="865" y="171">Refusé</text>
      </g>
      <g className="flow" stroke="#9aa3a9" strokeWidth="1.7" fill="none" markerEnd="url(#stO)">
        <path d="M22 102 H36" />
        <path d="M190 102 H246" />
        <path d="M400 102 H456" />
        <path d="M630 90 H710 V50 H786" />
        <path d="M630 114 H710 V166 H786" />
      </g>
      <path className="flow" d="M545 128 V236 H115 V132" stroke="#2dd8b8" strokeWidth="2" fill="none" markerEnd="url(#stoO)" />
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="10.5" fill="#dde3e5" textAnchor="middle">
        <text x="218" y="66">pièces complètes</text>
        <text x="428" y="66">prise en charge</text>
        <text x="710" y="42">décision favorable</text>
        <text x="710" y="186">décision défavorable</text>
        <text x="330" y="230" fill="#2dd8b8">complément demandé</text>
      </g>
      <g fill="none" stroke="#dde3e5" strokeWidth="2">
        <circle cx="976" cy="50" r="7" />
        <circle cx="976" cy="166" r="7" />
      </g>
      <g fill="#dde3e5">
        <circle cx="976" cy="50" r="3.5" />
        <circle cx="976" cy="166" r="3.5" />
      </g>
    </svg>
  );
}

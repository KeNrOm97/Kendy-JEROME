export default function BackupDiagram() {
  return (
    <svg viewBox="0 0 620 230" role="img" aria-label="Chaîne de sauvegarde : cron déclenche la compression tar.gz, transférée en SCP vers un hôte distant, avec rotation sur deux jours puis purge des archives expirées." style={{width: '100%', height: 'auto', display: 'block'}}>
      <defs>
        <marker id="bkB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#dde3e5" />
        </marker>
      </defs>
      <g fill="none" stroke="#dde3e5" strokeWidth="2">
        <rect x="20" y="70" width="160" height="50" />
        <rect x="230" y="70" width="160" height="50" />
        <rect x="440" y="70" width="160" height="50" />
        <rect x="440" y="165" width="160" height="50" />
        <rect x="230" y="165" width="160" height="50" />
      </g>
      <g className="flow" stroke="#9aa3a9" strokeWidth="1.6" fill="none" markerEnd="url(#bkB)">
        <path d="M180 95 H226" />
        <path d="M390 95 H436" />
        <path d="M520 120 V161" />
        <path d="M440 190 H394" />
      </g>
      <g fontFamily="var(--font-familjen-grotesk), sans-serif" fontSize="12.5" fill="#dde3e5" textAnchor="middle">
        <text x="100" y="100">compression tar.gz</text>
        <text x="310" y="100">transfert SCP / SSH</text>
        <text x="520" y="100">hôte distant</text>
        <text x="520" y="195">rotation sur 2 jours</text>
        <text x="310" y="195">purge des expirées</text>
      </g>
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="10" fill="#7c8790" textAnchor="middle">
        <text x="203" y="88">flux</text>
        <text x="413" y="88">sur SSH</text>
      </g>
      <rect x="20" y="12" width="160" height="34" fill="none" stroke="#2dd8b8" strokeWidth="2" strokeDasharray="5 4" />
      <text x="100" y="34" fontFamily="var(--font-fragment-mono), monospace" fontSize="12" fill="#2dd8b8" textAnchor="middle">cron</text>
      <path className="flow-slow" d="M100 46 V66" stroke="#2dd8b8" strokeWidth="1.8" fill="none" markerEnd="url(#bkB)" />
      <text x="112" y="62" fontFamily="var(--font-fragment-mono), monospace" fontSize="10" fill="#2dd8b8">déclenche</text>
    </svg>
  );
}

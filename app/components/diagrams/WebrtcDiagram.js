export default function WebrtcDiagram() {
  return (
    <svg viewBox="0 0 620 230" role="img" aria-label="Passerelle WebRTC : le navigateur charge la page servie par lighttpd avec un certificat Let's Encrypt, puis traverse le pare-feu PF en WSS pour la signalisation et en SRTP pour le média chiffré jusqu'à Asterisk, qui met en relation avec les postes SIP internes." style={{width: '100%', height: 'auto', display: 'block'}}>
      <defs>
        <marker id="wrW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#dde3e5" />
        </marker>
        <marker id="wroW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#2dd8b8" />
        </marker>
      </defs>
      <g fill="none" stroke="#dde3e5" strokeWidth="2">
        <rect x="20" y="30" width="150" height="50" />
        <rect x="240" y="20" width="90" height="70" stroke="#2dd8b8" strokeWidth="2.6" />
        <rect x="400" y="30" width="200" height="50" />
        <rect x="400" y="160" width="200" height="50" />
        <rect x="20" y="160" width="150" height="50" />
      </g>
      <g fontFamily="var(--font-familjen-grotesk), sans-serif" fontSize="12.5" fill="#dde3e5" textAnchor="middle">
        <text x="95" y="60">Navigateur</text>
        <text x="500" y="60">Asterisk</text>
        <text x="500" y="190">Postes SIP internes</text>
        <text x="95" y="190">lighttpd</text>
      </g>
      <text x="285" y="60" fontFamily="var(--font-fragment-mono), monospace" fontSize="12" fill="#2dd8b8" textAnchor="middle">PF</text>
      <g className="flow" stroke="#9aa3a9" strokeWidth="1.6" fill="none" markerEnd="url(#wrW)">
        <path d="M170 45 H236" />
        <path d="M330 40 H396" />
        <path d="M330 70 H396" />
        <path d="M500 80 V156" />
      </g>
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="10" fill="#dde3e5" textAnchor="middle">
        <text x="363" y="32">WSS</text>
        <text x="363" y="88">SRTP</text>
        <text x="203" y="38">HTTPS</text>
      </g>
      <g className="flow-slow" stroke="#9aa3a9" strokeWidth="1.6" fill="none" markerEnd="url(#wrW)">
        <path d="M95 160 V84" />
      </g>
      <text x="103" y="126" fontFamily="var(--font-fragment-mono), monospace" fontSize="10" fill="#7c8790">page + certificat</text>
      <g transform="translate(348,96)" stroke="#2dd8b8" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <rect x="4.5" y="10.5" width="15" height="9.5" rx="1.5" />
        <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" />
      </g>
      <rect x="230" y="160" width="110" height="50" fill="none" stroke="#2dd8b8" strokeWidth="2" strokeDasharray="5 4" />
      <text x="285" y="182" fontFamily="var(--font-fragment-mono), monospace" fontSize="10.5" fill="#2dd8b8" textAnchor="middle">Let's Encrypt</text>
      <text x="285" y="197" fontFamily="var(--font-fragment-mono), monospace" fontSize="10" fill="#7fd8c6" textAnchor="middle">renouvelé seul</text>
      <path className="flow-slow" d="M230 185 H176" stroke="#2dd8b8" strokeWidth="1.7" fill="none" markerEnd="url(#wroW)" />
    </svg>
  );
}

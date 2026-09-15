export default function OpenWccDiagram() {
  return (
    <svg viewBox="0 0 1160 500" role="img" aria-label="Architecture de la plateforme OpenWCC : les clients SIP, navigateur et messagerie traversent le pare-feu PF vers les services lighttpd, Tomcat, Asterisk, Apache James et Openfire, qui accèdent à PostgreSQL, Redis et OpenLDAP ; Ansible déploie l'ensemble et Prometheus le supervise." style={{width: '100%', height: 'auto', display: 'block'}}>
      <defs>
        <marker id="arA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#c7ccce" />
        </marker>
        <marker id="aroA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#ffb454" />
        </marker>
      </defs>
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="11" fill="#7c8790" letterSpacing="1.4">
        <text x="20" y="26">ACCÈS</text>
        <text x="290" y="26">FILTRAGE</text>
        <text x="470" y="26">SERVICES</text>
        <text x="790" y="26">DONNÉES</text>
      </g>
      <g fill="none" stroke="#dde3e5" strokeWidth="2">
        <rect x="20" y="70" width="180" height="64" />
        <rect x="20" y="170" width="180" height="64" />
        <rect x="20" y="270" width="180" height="64" />
      </g>
      <g stroke="#dde3e5" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(36,86)">
          <path d="M7 3.5h3l1.2 4-2 1.4a11 11 0 0 0 5.9 5.9l1.4-2 4 1.2v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 5 5.7 2 2 0 0 1 7 3.5z" />
        </g>
        <g transform="translate(36,186)">
          <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
          <path d="M3 9.5h18" />
          <circle cx="6.2" cy="7" r="0.8" />
          <circle cx="8.8" cy="7" r="0.8" />
        </g>
        <g transform="translate(36,286)">
          <path d="M4 5.5h16v10H9l-5 4z" />
        </g>
      </g>
      <g fontFamily="var(--font-familjen-grotesk), sans-serif" fontSize="13" fill="#dde3e5">
        <text x="70" y="98">Postes SIP</text>
        <text x="70" y="198">Navigateur WebRTC</text>
        <text x="70" y="298">Clients mail / XMPP</text>
      </g>
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="10.5" fill="#7c8790">
        <text x="70" y="115">postes internes</text>
        <text x="55" y="215">sans logiciel client</text>
        <text x="70" y="315">SMTP · IMAP · XMPP</text>
      </g>
      <rect x="290" y="70" width="120" height="264" fill="none" stroke="#2dd8b8" strokeWidth="3" />
      <g transform="translate(338,178)" stroke="#2dd8b8" strokeWidth="1.7" fill="none" strokeLinecap="round">
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="M3 9.7h18M3 14.3h18M9 5v4.7M15 9.7v4.6M9 14.3V19" />
      </g>
      <circle className="led" cx="398" cy="84" r="3" fill="#2dd8b8" />
      <text x="350" y="222" fontFamily="var(--font-familjen-grotesk), sans-serif" fontSize="14" fill="#2dd8b8" textAnchor="middle">Pare-feu PF</text>
      <text x="350" y="240" fontFamily="var(--font-fragment-mono), monospace" fontSize="10.5" fill="#7fd8c6" textAnchor="middle">règles posées</text>
      <text x="350" y="254" fontFamily="var(--font-fragment-mono), monospace" fontSize="10.5" fill="#7fd8c6" textAnchor="middle">avec le service</text>
      <g className="flow" stroke="#c7ccce" strokeWidth="1.6" fill="none" markerEnd="url(#arA)">
        <path d="M200 102 H286" />
        <path d="M200 202 H286" />
        <path d="M200 302 H286" />
      </g>
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="10" fill="#7c8790" textAnchor="middle">
        <text x="243" y="96">SIP</text>
        <text x="243" y="196">HTTPS · WSS</text>
        <text x="243" y="296">SMTP · XMPP</text>
      </g>
      <g fill="none" stroke="#dde3e5" strokeWidth="2">
        <rect x="470" y="54" width="230" height="64" />
        <rect x="470" y="134" width="230" height="64" />
        <rect x="470" y="214" width="230" height="64" />
        <rect x="470" y="294" width="230" height="64" />
      </g>
      <g stroke="#dde3e5" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(486,70)">
          <rect x="9" y="3" width="6" height="18" rx="1" />
          <path d="M2 8h7M2 16h7M15 8h7M15 16h7" />
        </g>
        <g transform="translate(486,150)">
          <rect x="3" y="9" width="7" height="6" rx="1" />
          <rect x="11" y="9" width="7" height="6" rx="1" />
          <rect x="7" y="3" width="7" height="5" rx="1" />
          <path d="M3 19h18" />
        </g>
        <g transform="translate(486,230)">
          <path d="M7 3.5h3l1.2 4-2 1.4a11 11 0 0 0 5.9 5.9l1.4-2 4 1.2v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 5 5.7 2 2 0 0 1 7 3.5z" />
        </g>
        <g transform="translate(486,310)">
          <path d="M4 5.5h16v10H9l-5 4z" />
        </g>
      </g>
      <g fontFamily="var(--font-familjen-grotesk), sans-serif" fontSize="13" fill="#dde3e5">
        <text x="520" y="82">lighttpd · frontal TLS</text>
        <text x="520" y="162">Tomcat 10 · OpenJDK 11</text>
        <text x="520" y="242">Asterisk 18</text>
        <text x="520" y="322">Apache James · Openfire</text>
      </g>
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="10.5" fill="#7c8790">
        <text x="520" y="99">certificat Let's Encrypt</text>
        <text x="520" y="179">application métier</text>
        <text x="490" y="259">SVI · files d'attente · routage</text>
        <text x="520" y="339">messagerie et XMPP</text>
      </g>
      <g className="flow" stroke="#c7ccce" strokeWidth="1.6" fill="none" markerEnd="url(#arA)">
        <path d="M410 86 H466" />
        <path d="M410 246 H466" />
        <path d="M410 326 H466" />
      </g>
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="10" fill="#7c8790" textAnchor="middle">
        <text x="438" y="80">HTTPS</text>
        <text x="438" y="240">SIP · WSS</text>
        <text x="438" y="320">SMTP</text>
      </g>
      <path className="flow" d="M585 118 V130" stroke="#c7ccce" strokeWidth="1.6" fill="none" markerEnd="url(#arA)" />
      <text x="600" y="129" fontFamily="var(--font-fragment-mono), monospace" fontSize="10" fill="#7c8790">reverse proxy</text>
      <g fill="none" stroke="#dde3e5" strokeWidth="2">
        <rect x="790" y="94" width="200" height="64" />
        <rect x="790" y="174" width="200" height="64" />
        <rect x="790" y="254" width="200" height="64" />
      </g>
      <g stroke="#dde3e5" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(806,110)">
          <ellipse cx="12" cy="6" rx="7.5" ry="3" />
          <path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
          <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
        </g>
        <g transform="translate(806,190)">
          <ellipse cx="12" cy="6" rx="7.5" ry="3" />
          <path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
          <path d="M13.2 9.6l-3.2 4.2h4l-3.2 4.2" />
        </g>
        <g transform="translate(806,270)">
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="5.5" cy="19" r="2.5" />
          <circle cx="18.5" cy="19" r="2.5" />
          <path d="M12 7.5v4M5.5 16.5v-2a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2" />
        </g>
      </g>
      <g fontFamily="var(--font-familjen-grotesk), sans-serif" fontSize="13" fill="#dde3e5">
        <text x="840" y="122">PostgreSQL 15</text>
        <text x="840" y="202">Redis</text>
        <text x="840" y="282">OpenLDAP</text>
      </g>
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="10.5" fill="#7c8790">
        <text x="840" y="139">données métier et CDR</text>
        <text x="840" y="219">cache et sessions</text>
        <text x="840" y="299">comptes et annuaire</text>
      </g>
      <path d="M765 126 V326" stroke="#dde3e5" strokeWidth="1.6" fill="none" />
      <g stroke="#dde3e5" strokeWidth="1.6" fill="none">
        <path d="M700 166 H765" />
        <path d="M700 246 H765" />
        <path d="M700 326 H765" />
      </g>
      <g className="flow" stroke="#c7ccce" strokeWidth="1.6" fill="none" markerEnd="url(#arA)">
        <path d="M765 126 H786" />
        <path d="M765 206 H786" />
        <path d="M765 286 H786" />
      </g>
      <g fill="#dde3e5">
        <circle cx="765" cy="166" r="3" />
        <circle cx="765" cy="246" r="3" />
        <circle cx="765" cy="326" r="3" />
      </g>
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="10" fill="#7c8790" textAnchor="middle">
        <text x="732" y="160">SQL</text>
        <text x="732" y="240">cache</text>
        <text x="732" y="320">LDAP</text>
      </g>
      <g fill="none" stroke="#dde3e5" strokeWidth="2" strokeDasharray="6 4">
        <rect x="290" y="400" width="410" height="56" />
        <rect x="790" y="400" width="200" height="56" />
      </g>
      <g stroke="#dde3e5" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(306,416)">
          <path d="M4 5.5a2 2 0 0 1 2-2h12v17H6a2 2 0 0 0-2 2z" />
          <path d="M8 8h7M8 11.5h7" />
        </g>
        <g transform="translate(806,416)">
          <rect x="3" y="4.5" width="18" height="13" rx="1.5" />
          <path d="M6.5 13l3-4 2.5 3 2-5 3.5 6" />
          <path d="M9 21h6" />
        </g>
      </g>
      <g fontFamily="var(--font-familjen-grotesk), sans-serif" fontSize="13" fill="#dde3e5">
        <text x="340" y="428">Ansible + scripts Shell</text>
        <text x="840" y="428">Prometheus · Zabbix</text>
      </g>
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="10.5" fill="#7c8790">
        <text x="340" y="445">redéploiement intégral, sans intervention manuelle</text>
        <text x="840" y="445">métriques et alertes</text>
      </g>
      <g className="flow-slow" stroke="#ffb454" strokeWidth="1.6" fill="none" markerEnd="url(#aroA)">
        <path d="M350 400 V338" />
        <path d="M585 400 V362" />
        <path d="M890 400 V322" />
      </g>
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="10" fill="#ffb454">
        <text x="357" y="380">déploie</text>
        <text x="592" y="380">déploie</text>
        <text x="897" y="380">collecte</text>
      </g>
      <g transform="translate(20,470)">
        <path className="flow" d="M0 0 H30" stroke="#c7ccce" strokeWidth="1.6" />
        <text x="38" y="4" fontFamily="var(--font-fragment-mono), monospace" fontSize="10.5" fill="#7c8790">flux applicatif</text>
        <path d="M170 0 H200" stroke="#ffb454" strokeWidth="1.6" strokeDasharray="5 4" />
        <text x="208" y="4" fontFamily="var(--font-fragment-mono), monospace" fontSize="10.5" fill="#7c8790">pilotage : déploiement et supervision</text>
        <rect x="470" y="-6" width="12" height="12" fill="none" stroke="#2dd8b8" strokeWidth="2" />
        <text x="490" y="4" fontFamily="var(--font-fragment-mono), monospace" fontSize="10.5" fill="#7c8790">point de filtrage : rien n'entre sans passer par PF</text>
      </g>
    </svg>
  );
}

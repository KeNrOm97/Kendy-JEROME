export default function SviDiagram() {
  return (
    <svg viewBox="0 0 1000 470" role="img" aria-label="Déroulé d'un appel : l'appelant joint Asterisk, qui lance le script Python AGI ; le script lit le dossier dans Cassandra, fait jouer l'annonce, reçoit la touche DTMF, écrit la trace d'appel et renvoie la destination de routage à Asterisk, qui met l'appelant en relation." style={{width: '100%', height: 'auto', display: 'block'}}>
      <defs>
        <marker id="sqA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#c7ccce" />
        </marker>
        <marker id="sqoA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#2dd8b8" />
        </marker>
      </defs>
      <g fill="none" stroke="#dde3e5" strokeWidth="2">
        <rect x="15" y="8" width="170" height="40" />
        <rect x="275" y="8" width="170" height="40" />
        <rect x="555" y="8" width="170" height="40" />
        <rect x="815" y="8" width="170" height="40" />
      </g>
      <g fontFamily="var(--font-familjen-grotesk), sans-serif" fontSize="13" fill="#dde3e5" textAnchor="middle">
        <text x="100" y="33">Appelant</text>
        <text x="360" y="33">Asterisk 18</text>
        <text x="640" y="33">Script Python AGI</text>
        <text x="900" y="33">Cassandra</text>
      </g>
      <g stroke="#2b3137" strokeWidth="1.4" strokeDasharray="4 5">
        <path d="M100 48 V452" />
        <path d="M360 48 V452" />
        <path d="M640 48 V452" />
        <path d="M900 48 V452" />
      </g>
      <g className="flow" stroke="#9aa3a9" strokeWidth="1.6" fill="none" markerEnd="url(#sqA)">
        <path d="M100 90 H356" style={{animationDelay: '0s'}} />
        <path d="M360 122 H636" style={{animationDelay: '.2s'}} />
        <path d="M640 154 H896" style={{animationDelay: '.4s'}} />
        <path d="M640 218 H364" style={{animationDelay: '.6s'}} />
        <path d="M360 250 H104" style={{animationDelay: '.8s'}} />
        <path d="M100 282 H356" style={{animationDelay: '1s'}} />
        <path d="M360 314 H636" style={{animationDelay: '1.2s'}} />
        <path d="M640 346 H896" style={{animationDelay: '1.4s'}} />
        <path d="M360 442 H104" style={{animationDelay: '1.8s'}} />
      </g>
      <path className="flow" d="M900 186 H644" stroke="#9aa3a9" strokeWidth="1.6" fill="none" markerEnd="url(#sqA)" style={{animationDelay: '.5s'}} />
      <path className="flow" d="M640 394 H364" stroke="#2dd8b8" strokeWidth="2.2" fill="none" markerEnd="url(#sqoA)" style={{animationDelay: '1.6s'}} />
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="11" fill="#dde3e5" textAnchor="middle">
        <text x="228" y="84">appel entrant</text>
        <text x="498" y="116">lancement du script (AGI)</text>
        <text x="768" y="148">lecture CQL du dossier</text>
        <text x="772" y="180" fill="#7c8790">données client</text>
        <text x="502" y="212">annonce et menu à jouer</text>
        <text x="232" y="244">message vocal</text>
        <text x="228" y="276">saisie DTMF</text>
        <text x="498" y="308">touche transmise</text>
        <text x="768" y="340">écriture de la trace d'appel</text>
        <text x="502" y="388" fill="#2dd8b8">destination de routage</text>
        <text x="232" y="436">mise en relation</text>
      </g>
      <g fontFamily="var(--font-fragment-mono), monospace" fontSize="10" fill="#7c8790" textAnchor="middle">
        <text x="502" y="406">décidée à l'exécution, pas dans le dialplan</text>
      </g>
    </svg>
  );
}

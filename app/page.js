import SessionTimer from "./components/SessionTimer";
import ProjectsBanner from "./components/ProjectsBanner";
import ProjectsGrid from "./components/ProjectsGrid";
import ContactForm from "./components/ContactForm";

const stackIcons = {
  freebsd: (
    <>
      <circle cx="12" cy="14" r="5.4" fill="none" stroke="#AB2B28" strokeWidth="1.8" />
      <path d="M9 9.2C8 6.6 8.6 4.4 10.6 3c-.4 1.6 0 2.8 1 3.6" fill="none" stroke="#AB2B28" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14.6 9.6c1.4-2.4 1.2-4.6-.6-6.3c.1 1.6-.4 2.8-1.5 3.4" fill="none" stroke="#AB2B28" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16.6 16.4l3.6 1.1-1.6 1-.4 1.8-1.6-2.1z" fill="#AB2B28" />
    </>
  ),
  linux: (
    <>
      <ellipse cx="12" cy="13" rx="5.4" ry="6.6" fill="#111" />
      <ellipse cx="12" cy="14.5" rx="3.1" ry="4.2" fill="#fff" />
      <ellipse cx="7.2" cy="19" rx="1.7" ry="2.3" transform="rotate(-16 7.2 19)" fill="#111" />
      <ellipse cx="16.8" cy="19" rx="1.7" ry="2.3" transform="rotate(16 16.8 19)" fill="#111" />
      <circle cx="10" cy="10.5" r="1.1" fill="#111" />
      <circle cx="14" cy="10.5" r="1.1" fill="#111" />
      <circle cx="10" cy="10.8" r="0.45" fill="#fff" />
      <circle cx="14" cy="10.8" r="0.45" fill="#fff" />
      <path d="M9 13.6c1.4 1.5 4.6 1.5 6 0" fill="none" stroke="#111" strokeWidth="0.9" />
      <path d="M11.6 15.8c-.5 1.5-1.3 2.1-2.3 1.9" fill="none" stroke="#f4a300" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12.4 15.8c.5 1.5 1.3 2.1 2.3 1.9" fill="none" stroke="#f4a300" strokeWidth="1.3" strokeLinecap="round" />
    </>
  ),
  windows: (
    <>
      <rect x="3" y="3" width="8" height="8" fill="#F25022" />
      <rect x="13" y="3" width="8" height="8" fill="#7FBA00" />
      <rect x="3" y="13" width="8" height="8" fill="#00A4EF" />
      <rect x="13" y="13" width="8" height="8" fill="#FFB900" />
    </>
  ),
  cisco: (
    <g fill="#1BA0D7">
      <rect x="2.5" y="12" width="1.8" height="4" />
      <rect x="5.3" y="9.5" width="1.8" height="6.5" />
      <rect x="8.1" y="7.5" width="1.8" height="8.5" />
      <rect x="10.9" y="6.5" width="1.8" height="9.5" />
      <rect x="13.7" y="7.5" width="1.8" height="8.5" />
      <rect x="16.5" y="9.5" width="1.8" height="6.5" />
      <rect x="19.3" y="12" width="1.8" height="4" />
    </g>
  ),
  docker: (
    <g fill="#2496ED">
      <rect x="3.5" y="12" width="2.6" height="2.6" />
      <rect x="6.6" y="12" width="2.6" height="2.6" />
      <rect x="9.7" y="12" width="2.6" height="2.6" />
      <rect x="6.6" y="8.8" width="2.6" height="2.6" />
      <rect x="9.7" y="8.8" width="2.6" height="2.6" />
      <rect x="9.7" y="5.6" width="2.6" height="2.6" />
      <path d="M2.5 14.6c0-1 .8-1.6 1.8-1.6h15.6c1 0 1.9 1.5 1.4 2.9-.7 2.1-3 3.9-6.6 3.9-6.7 0-11.2-2-12.2-5.2z" />
    </g>
  ),
  ansible: (
    <>
      <circle cx="12" cy="12" r="8.6" fill="none" stroke="#EE0000" strokeWidth="1.8" />
      <path d="M12 6.4l4.6 11.6-4.6-3-4.6 3z" fill="#EE0000" />
      <circle cx="12" cy="12" r="1.4" fill="#0d0f12" />
    </>
  ),
  python: (
    <>
      <path d="M11.9 3.3c1.8 0 3.2.3 3.2 1.6v3h-6.4v.8h8.8c1.4 0 2.5 1.7 2.5 4.9 0 3.3-1.1 4.7-2.5 4.7h-2v-2.2c0-1.6-1.3-2.7-2.9-2.7H9.1c-1.3 0-2.4-1.2-2.4-2.7V6.1c0-1.4 1.4-2.8 5.2-2.8z" fill="#3776AB" />
      <path d="M12.1 20.7c-1.8 0-3.2-.3-3.2-1.6v-3h6.4v-.8H6.5c-1.4 0-2.5-1.7-2.5-4.9 0-3.3 1.1-4.7 2.5-4.7h2v2.2c0 1.6 1.3 2.7 2.9 2.7h3.5c1.3 0 2.4 1.2 2.4 2.7v3.6c0 1.4-1.4 2.8-5.2 2.8z" fill="#FFD43B" />
      <circle cx="10.2" cy="5" r="0.7" fill="#0d0f12" />
      <circle cx="13.8" cy="19" r="0.7" fill="#0d0f12" />
    </>
  ),
  odoo: (
    <>
      <circle cx="8" cy="12" r="5" fill="none" stroke="#714B67" strokeWidth="2.3" />
      <circle cx="16" cy="12" r="5" fill="#714B67" />
    </>
  ),
  asterisk: (
    <g stroke="#F38020" strokeWidth="2.4" strokeLinecap="round">
      <path d="M12 3.5v17" />
      <path d="M4.2 8l15.6 8" />
      <path d="M19.8 8L4.2 16" />
    </g>
  ),
  nginx: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="#009639" strokeWidth="1.7" />
      <path d="M8.4 16V8l7.2 8V8" fill="none" stroke="#009639" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  lighttpd: (
    <>
      <g fill="none" stroke="#8a97a1" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="4.5" width="17" height="6" rx="1" />
        <rect x="3.5" y="13.5" width="17" height="6" rx="1" />
      </g>
      <circle cx="6.8" cy="7.5" r="0.9" fill="#8a97a1" />
      <circle cx="6.8" cy="16.5" r="0.9" fill="#8a97a1" />
    </>
  ),
  letsencrypt: (
    <>
      <path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z" fill="none" stroke="#5b8ec4" strokeWidth="1.7" strokeLinejoin="round" />
      <rect x="9" y="11" width="6" height="5" rx="1" fill="none" stroke="#5b8ec4" strokeWidth="1.5" />
      <path d="M10.3 11V9.3a1.7 1.7 0 0 1 3.4 0V11" fill="none" stroke="#5b8ec4" strokeWidth="1.5" />
    </>
  ),
  postgresql: (
    <>
      <path d="M12.5 3.4c4.6 0 7.6 3 7.4 7.4-.1 3-1.2 5.4-3 7-1 .9-1.4 1.6-1.5 2.7-.9.4-1.9.2-2.3-.6-1.6.3-3.4 0-4.7-1-2.7-2-4-5.4-3.4-8.9.6-3.9 3.6-6.6 7.5-6.6z" fill="none" stroke="#4169E1" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 10.3c-1.6-.3-2.7.3-2.9 1.4" fill="none" stroke="#4169E1" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M13.4 20.3c-.2-1.4.2-2.6 1.5-3.6" fill="none" stroke="#4169E1" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="10.6" cy="10.5" r="0.9" fill="#4169E1" />
    </>
  ),
  redis: (
    <g fill="#DC382D">
      <path d="M12 4.2l7 3-7 3-7-3z" />
      <path d="M5 10.3l7 3 7-3v2.4l-7 3-7-3z" opacity="0.72" />
      <path d="M5 14.6l7 3 7-3v2.4l-7 3-7-3z" opacity="0.48" />
    </g>
  ),
  prometheus: (
    <>
      <path d="M12 3.4c3 2.6 4.6 5.2 4.6 8 0 2-1 3.3-2 4.2.7-1.6.4-2.8-.5-4-.2 1.6-.9 2.6-2.1 3.4-1.2-.8-1.9-1.8-2.1-3.4-.9 1.2-1.2 2.4-.5 4-1-.9-2-2.2-2-4.2 0-2.8 1.6-5.4 4.6-8z" fill="#E6522C" />
      <rect x="8.4" y="19" width="7.2" height="1.8" rx="0.9" fill="#E6522C" />
    </>
  ),
  zabbix: (
    <>
      <path d="M12 3l3 6.3L21 12l-6 2.7L12 21l-3-6.3L3 12l6-2.7z" fill="#D40000" />
      <circle cx="12" cy="12" r="2.3" fill="#0d0f12" />
    </>
  ),
};

const stackGroups = [
  {
    title: "Systèmes & réseau",
    items: [
      { key: "freebsd", name: "FreeBSD", note: "OpenWCC · passerelle WebRTC" },
      { key: "linux", name: "Linux", note: "Debian · Ubuntu · CentOS" },
      { key: "windows", name: "Windows Server", note: "postes et serveurs de gestion" },
      { key: "cisco", name: "Cisco", note: "CCNA · VLAN · routage" },
    ],
  },
  {
    title: "Conteneurs, IaC & scripts",
    items: [
      { key: "docker", name: "Docker", note: "module Odoo · MiruStream API" },
      { key: "ansible", name: "Ansible", note: "playbooks · redéploiement OpenWCC" },
      { key: "python", name: "Python", note: "scripts · AGI · automatisation" },
      { key: "odoo", name: "Odoo", note: "module dossiers de subvention" },
    ],
  },
  {
    title: "Temps réel & frontaux web",
    items: [
      { key: "asterisk", name: "Asterisk", note: "SVI 18 · files d’attente" },
      { key: "nginx", name: "Nginx", note: "reverse proxy · module Odoo" },
      { key: "lighttpd", name: "lighttpd", note: "frontal TLS · OpenWCC · WebRTC" },
      { key: "letsencrypt", name: "Let's Encrypt", note: "certificats · passerelle WebRTC" },
    ],
  },
  {
    title: "Données & observabilité",
    items: [
      { key: "postgresql", name: "PostgreSQL", note: "OpenWCC · module Odoo" },
      { key: "redis", name: "Redis", note: "cache · OpenWCC · SVI" },
      { key: "prometheus", name: "Prometheus", note: "métriques · OpenWCC" },
      { key: "zabbix", name: "Zabbix", note: "alertes · OpenWCC" },
    ],
  },
];

const parcours = [
  { years: "2023–2025", title: "Mastère MPP, manager de portefeuille de projets", place: "Keyce Academy" },
  { years: "2023", title: "Licence pro MRIT, Internet des Objets", place: "Lycée Joseph Gaillard" },
  { years: "-", title: "Certification CCNA, réseaux Cisco", place: "Cisco" },
  { years: "2022", title: "BTS SN, informatique et réseaux", place: "Lycée Joseph Gaillard" },
];

export default function Home() {
  return (
    <div style={{background: '#0d0f12', color: '#eef1f0', fontFamily: "var(--font-familjen-grotesk), system-ui, sans-serif"}}>
      {/* BARRE */}
      <header style={{position: 'sticky', top: '0', zIndex: '50', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px 24px', padding: 'clamp(12px, 3vw, 16px) clamp(16px, 5vw, 48px)', borderBottom: '1px solid #1c2024', background: 'rgba(13, 15, 18, 0.85)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', fontFamily: "var(--font-fragment-mono), ui-monospace, monospace", fontSize: 'clamp(11px, 2.8vw, 14px)', color: '#8a949d'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px', minWidth: '0', flex: '1 1 auto'}}>
          <span className="led" style={{width: '7px', height: '7px', borderRadius: '50%', background: '#2dd8b8', display: 'inline-block', flexShrink: '0'}} />
          <span style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: '0'}}>
            Kendy Jerome
            <span className="topbar-sub"> · infrastructure &amp; systèmes</span>
          </span>
        </div>
        <nav style={{display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px, 4vw, 26px)'}}>
          <a href="#projets" style={{color: '#8a949d'}}>
            projets
          </a>
          <a href="#stack" style={{color: '#8a949d'}}>
            stack
          </a>
          <a href="#contact" style={{color: '#8a949d'}}>
            contact
          </a>
        </nav>
      </header>
      <main>
      {/* HERO */}
      <div className="hero-grid" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0', padding: 'clamp(40px, 8vw, 64px) clamp(16px, 5vw, 48px) 0 clamp(16px, 5vw, 48px)', maxWidth: '760px', margin: '0 auto'}}>
        <div style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: 'clamp(11px, 2.6vw, 13px)', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2dd8b8', paddingBottom: '18px'}}>
          Fort-de-France (972) · certifié Cisco CCNA
        </div>
        <h1 style={{margin: '0', fontFamily: "var(--font-familjen-grotesk), sans-serif", fontWeight: '700', fontSize: 'clamp(34px, 7.2vw, 66px)', lineHeight: '1.08', letterSpacing: '-0.02em'}}>
          Des systèmes qui tiennent, même quand personne ne regarde.
        </h1>
        <p style={{margin: '24px 0 0 0', fontSize: 'clamp(15px, 2.6vw, 18px)', lineHeight: '1.62', color: '#b4bcc2', maxWidth: '38em'}}>
          Infrastructures FreeBSD et Linux, téléphonie Asterisk, réseaux chiffrés, déploiements automatisés. Je conçois, j'installe, j'automatise, je sécurise, je supervise
          <span className="caret" style={{color: '#2dd8b8'}}>
            _
          </span>
        </p>
        <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px'}}>
          <a href="#contact" style={{display: 'inline-flex', alignItems: 'center', height: '50px', padding: '0 26px', background: '#2dd8b8', color: '#06120f', fontWeight: '700', fontSize: '15px', borderRadius: '4px'}}>
            Me contacter
          </a>
          <a href="https://github.com/KeNrOm97" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', height: '50px', padding: '0 26px', border: '1px solid #262b30', color: '#eef1f0', fontSize: '15px', borderRadius: '4px'}}>
            GitHub
          </a>
        </div>
      </div>
      {/* TON PARCOURS */}
      <div style={{padding: 'clamp(40px, 7vw, 56px) clamp(16px, 5vw, 48px) 0 clamp(16px, 5vw, 48px)'}}>
        <h2 style={{margin: '0 0 22px 0', fontSize: 'clamp(20px, 4vw, 26px)', fontWeight: '700', letterSpacing: '-0.015em'}}>
          Ton parcours
        </h2>
        <div style={{display: 'flex', flexDirection: 'column', fontFamily: "var(--font-fragment-mono), monospace", fontSize: '13.5px'}}>
          {parcours.map((step, i) => (
            <div
              key={step.title}
              style={{display: 'grid', gridTemplateColumns: 'minmax(64px, 130px) minmax(140px, 1fr) minmax(100px, 240px)', gap: 'clamp(10px, 3vw, 20px)', padding: '14px 0', borderTop: '1px solid #1c2024', borderBottom: i === parcours.length - 1 ? '1px solid #1c2024' : 'none'}}
            >
              <span style={{color: '#2dd8b8'}}>{step.years}</span>
              <span style={{color: '#dde3e5'}}>{step.title}</span>
              <span style={{color: '#7c8790'}}>{step.place}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BANDEROLE PROJETS */}
      <ProjectsBanner />

      {/* PROJETS (RÉALISATION) */}
      <div id="projets" style={{padding: 'clamp(40px, 8vw, 72px) clamp(16px, 5vw, 48px) 0 clamp(16px, 5vw, 48px)', scrollMarginTop: '70px'}}>
        <div style={{display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px 20px', paddingBottom: '18px'}}>
          <h2 style={{margin: '0', fontSize: 'clamp(26px, 5.2vw, 38px)', fontWeight: '700', letterSpacing: '-0.015em'}}>
            Projets
          </h2>
          <span style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '12.5px', color: '#7c8790'}}>
            infra, VoIP et web — clique une carte pour le détail
          </span>
        </div>
        <ProjectsGrid />
      </div>

      {/* TEMPS SUR MON PORTFOLIO */}
      <div style={{padding: 'clamp(40px, 7vw, 56px) clamp(16px, 5vw, 48px) 0 clamp(16px, 5vw, 48px)'}}>
        <div style={{border: '1px solid #1c2024', background: '#101317', borderRadius: '6px', padding: 'clamp(18px, 4vw, 28px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "var(--font-fragment-mono), monospace", fontSize: '12.5px', color: '#7c8790'}}>
            <span className="led" style={{width: '6px', height: '6px', borderRadius: '50%', background: '#2dd8b8', display: 'inline-block'}} />
            temps passé ici
          </div>
          <div style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: 'clamp(24px, 5vw, 34px)', fontWeight: '500', letterSpacing: '0.03em', color: '#eef1f0'}}>
            <SessionTimer />
          </div>
        </div>
      </div>

      {/* STACK EN TUILES */}
      <div id="stack" style={{padding: 'clamp(40px, 8vw, 72px) clamp(16px, 5vw, 48px) 0 clamp(16px, 5vw, 48px)', scrollMarginTop: '70px'}}>
        <div style={{display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px 20px', paddingBottom: '26px'}}>
          <h2 style={{margin: '0', fontSize: 'clamp(26px, 5.2vw, 38px)', fontWeight: '700', letterSpacing: '-0.015em'}}>
            Stack
          </h2>
          <span style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '12.5px', color: '#7c8790'}}>
            chaque brique, le projet où elle sert
          </span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '28px'}}>
          {stackGroups.map((group) => (
            <div key={group.title}>
              <div style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2dd8b8', paddingBottom: '12px'}}>
                {group.title}
              </div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px'}}>
                {group.items.map((item) => (
                  <div key={item.key} className="card tile" style={{border: '1px solid #1c2024', borderRadius: '6px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '11px'}}>
                    <svg className="tile-icon" viewBox="0 0 24 24" width="28" height="28" style={{overflow: 'visible'}}>
                      {stackIcons[item.key]}
                    </svg>
                    <div style={{fontSize: '14px', fontWeight: '600'}}>
                      {item.name}
                    </div>
                    <div style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '10.5px', color: '#7c8790', lineHeight: '1.5'}}>
                      {item.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={{padding: 'clamp(40px, 8vw, 72px) clamp(16px, 5vw, 48px) 0 clamp(16px, 5vw, 48px)', scrollMarginTop: '70px'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(28px, 5vw, 48px)'}}>
          <div>
            <div style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '12.5px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2dd8b8', paddingBottom: '14px'}}>
              Ouvert aux opportunités
            </div>
            <h2 style={{margin: '0', fontSize: 'clamp(26px, 5.6vw, 40px)', fontWeight: '700', letterSpacing: '-0.015em', maxWidth: '14em'}}>
              Infrastructure, VoIP ou DevOps : parlons-en.
            </h2>
            <div style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '13px', color: '#7c8790', paddingTop: '14px'}}>
              Martinique · Métropole · Télétravail · Permis B, véhiculé
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      </main>

      {/* FOOTER */}
      <footer style={{padding: 'clamp(32px, 6vw, 48px) clamp(16px, 5vw, 48px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', borderTop: '1px solid #1c2024', marginTop: 'clamp(40px, 8vw, 64px)'}}>
        <span style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '12px', color: '#5c666e'}}>
          © {new Date().getFullYear()} Kendy Jerome
        </span>
        <div style={{display: 'flex', gap: '20px', fontFamily: "var(--font-fragment-mono), monospace", fontSize: '13px'}}>
          <a href="mailto:kendyjerome20@gmail.com">
            kendyjerome20@gmail.com
          </a>
          <a href="https://linkedin.com/in/kendy-jerome-4b147234b" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
          <a href="https://github.com/KeNrOm97" target="_blank" rel="noopener noreferrer">
            github
          </a>
        </div>
      </footer>
    </div>
  );
}

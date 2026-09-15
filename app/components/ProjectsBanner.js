import { projects } from "./projectsData";

const names = projects.map((p) => p.title);
const track = [...names, ...names];

export default function ProjectsBanner() {
  return (
    <div aria-hidden="true" style={{marginTop: '46px', borderTop: '1px solid #1c2024', borderBottom: '1px solid #1c2024', background: '#101317', overflow: 'hidden', padding: '14px 0'}}>
      <div className="ticker-track" style={{display: 'flex', gap: '48px', width: 'max-content', fontFamily: "var(--font-fragment-mono), monospace", fontSize: '13px', color: '#7c8790', whiteSpace: 'nowrap'}}>
        {track.map((name, i) => (
          <span key={`${name}-${i}`} style={{display: 'flex', alignItems: 'center', gap: '48px'}}>
            <span>{name}</span>
            <span style={{color: '#2dd8b8'}}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

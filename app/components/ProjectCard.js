export default function ProjectCard({ project, onOpen }) {
  const { Diagram, image, imageAlt, title, kicker, summary, tags } = project;
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="card rise"
      style={{
        border: '1px solid #1c2024',
        borderRadius: '6px',
        padding: '0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        background: 'transparent',
        color: 'inherit',
        font: 'inherit',
        cursor: 'pointer',
      }}
    >
      <div className="thumb-frame" style={{borderBottom: '1px solid #1c2024', background: '#101317', overflow: 'hidden', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {image ? (
          <img src={image} alt={imageAlt || ""} loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
        ) : Diagram ? (
          <div style={{width: '360px', flexShrink: '0', transform: 'scale(1.05)'}}>
            <Diagram />
          </div>
        ) : (
          <div style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '11px', color: '#5c666e'}}>—</div>
        )}
      </div>
      <div style={{padding: '20px', display: 'flex', flexDirection: 'column', gap: '9px', flexGrow: '1'}}>
        <div style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '11px', color: '#2dd8b8', textTransform: 'uppercase', letterSpacing: '.06em'}}>
          {kicker}
        </div>
        <h3 style={{margin: '0', fontSize: '17px', fontWeight: '700'}}>{title}</h3>
        <p style={{margin: '0', fontSize: '13.5px', lineHeight: '1.55', color: '#9aa3a9', flexGrow: '1'}}>{summary}</p>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '4px'}}>
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} style={{fontFamily: "var(--font-fragment-mono), monospace", fontSize: '10.5px', padding: '4px 8px', border: '1px solid #262b30', borderRadius: '3px', color: '#9aa3a9'}}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

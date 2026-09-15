"use client";

import { useState } from "react";
import { CATEGORIES, projects } from "./projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("tous");
  const [openProject, setOpenProject] = useState(null);

  const visible = activeCategory === "tous" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', paddingBottom: '26px'}}>
        {CATEGORIES.map((cat) => {
          const active = cat.key === activeCategory;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className="filter-chip"
              style={{
                fontFamily: "var(--font-fragment-mono), monospace",
                fontSize: '12.5px',
                padding: '9px 16px',
                borderRadius: '20px',
                border: active ? '1px solid #2dd8b8' : '1px solid #262b30',
                background: active ? 'rgba(45,216,184,0.1)' : 'transparent',
                color: active ? '#2dd8b8' : '#9aa3a9',
                cursor: 'pointer',
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px'}}>
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setOpenProject} />
        ))}
      </div>
      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </>
  );
}

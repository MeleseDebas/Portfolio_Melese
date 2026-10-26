import { useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = ['All', 'Full Stack', 'E-Commerce', 'Real-Time', 'DevOps Tool', 'SaaS', 'Frontend'];

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>();
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section ref={ref} id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 reveal">
          <span className="text-sm font-mono text-accent tracking-widest uppercase">03 / Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4a8] to-transparent rounded-full mt-4" />
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-[#00d4a8] text-[#0a0a0f]'
                  : 'glass border border-soft text-muted hover:text-[#e8e8f0] hover:border-[#00d4a8]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`card-tilt reveal reveal-delay-${(i % 3) + 1} group relative rounded-2xl bg-surface border border-soft overflow-hidden`}
            >
              {/* Gradient header */}
              <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white/10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {project.title.split(' ').map((w) => w[0]).join('')}
                  </span>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0a0f]/60 backdrop-blur-sm border border-soft">
                    <Star className="w-3.5 h-3.5 text-[#00d4a8] fill-[#00d4a8]" />
                    <span className="text-xs font-medium text-[#e8e8f0]">Featured</span>
                  </div>
                )}

                {/* Hover links */}
                <div className="absolute inset-0 bg-main/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass border border-soft flex items-center justify-center text-[#e8e8f0] hover:text-accent hover:scale-110 transition-all duration-300"
                    aria-label="View source"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass border border-soft flex items-center justify-center text-[#e8e8f0] hover:text-accent hover:scale-110 transition-all duration-300"
                    aria-label="View live site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-accent px-2 py-1 rounded-md bg-[#00d4a8]/10">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs bg-main border border-soft text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

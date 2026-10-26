import { experience, certifications } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="experience" className="relative py-24 md:py-32 bg-soft">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 reveal">
          <span className="text-sm font-mono text-accent tracking-widest uppercase">04 / Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            My Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4a8] to-transparent rounded-full mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-[#00d4a8] via-[#00d4a8]/30 to-transparent" />

          {experience.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <div
                key={i}
                className={`relative pl-16 md:pl-20 pb-12 last:pb-0 reveal reveal-delay-${Math.min(i + 1, 4)}`}
              >
                {/* Node */}
                <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-surface border border-soft flex items-center justify-center group hover:border-[#00d4a8]/40 transition-colors duration-300">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>

                {/* Card */}
                <div className="card-tilt p-6 rounded-2xl bg-surface border border-soft">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {exp.role}
                      </h3>
                      <p className="text-accent text-sm font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-muted px-3 py-1 rounded-full bg-main border border-soft">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((ach) => (
                      <span
                        key={ach}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-[#00d4a8]/8 border border-[#00d4a8]/15 text-muted"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#00d4a8]" />
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16 reveal">
          <h3 className="text-lg font-semibold mb-6 text-muted" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Certifications
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.name}
                  className="p-5 rounded-xl bg-surface border border-soft hover:border-[#00d4a8]/30 transition-colors duration-300 group"
                >
                  <Icon className="w-6 h-6 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-sm font-semibold mb-1">{cert.name}</h4>
                  <p className="text-xs text-muted">{cert.issuer} · {cert.year}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { skillCategories } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="skills" className="relative py-24 md:py-32 bg-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 reveal">
          <span className="text-sm font-mono text-accent tracking-widest uppercase">02 / Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Tech I Work With
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4a8] to-transparent rounded-full mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className={`card-tilt reveal reveal-delay-${(i % 3) + 1} group relative p-6 rounded-2xl bg-surface border border-soft overflow-hidden`}
              >
                {/* Hover glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#00d4a8]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[#00d4a8]/10 border border-[#00d4a8]/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {cat.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-sm bg-main border border-soft text-muted group-hover:border-[#00d4a8]/20 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

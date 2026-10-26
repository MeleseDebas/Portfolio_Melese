import { MapPin, Mail, Coffee } from 'lucide-react';
import { personalInfo, aboutParagraphs } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 reveal">
          <span className="text-sm font-mono text-accent tracking-widest uppercase">01 / About</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Who I Am
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4a8] to-transparent rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left: Avatar / visual */}
          <div className="md:col-span-2 reveal">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00d4a8]/20 to-[#7c4dff]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative aspect-square rounded-3xl bg-surface border border-soft p-8 flex flex-col justify-between overflow-hidden">
                {/* Decorative code block */}
                <div className="font-mono text-xs text-muted space-y-1.5">
                  <div><span className="text-[#ff6b4a]">const</span> <span className="text-accent">developer</span> = {'{'}</div>
                  <div className="pl-4">name: <span className="gradient-text glow-text">'Melese Debas'</span>,</div>
                  <div className="pl-4">role: <span className="gradient-text glow-text">'Full Stack Dev'</span>,</div>
                  <div className="pl-4">location: <span className="gradient-text glow-text">'Addis ababa, ET'</span>,</div>
                  <div className="pl-4">focus: <span className="gradient-text glow-text">'APIs', 'DevOps', ...</span>,</div>
                  <div className="pl-4">status: <span className="text-accent">open to work</span>,</div>
                  <div>{'}'}</div>
                </div>

                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <MapPin className="w-4 h-4 text-accent" />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <Mail className="w-4 h-4 text-accent" />
                    {personalInfo.email}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <Coffee className="w-4 h-4 text-accent" />
                    Always caffeinated
                  </div>
                </div>

                {/* Floating accent dot */}
                <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[#00d4a8] animate-float" />
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="md:col-span-3 space-y-6">
            {aboutParagraphs.map((para, i) => (
              <p
                key={i}
                className={`text-lg text-muted leading-relaxed reveal reveal-delay-${i + 1}`}
              >
                {para}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 pt-4 reveal reveal-delay-4">
              {['Problem Solver', 'Team Player', 'Open Source Contributor', 'Coffee Enthusiast'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full glass border border-soft text-sm text-muted hover:border-[#00d4a8]/40 hover:text-accent transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

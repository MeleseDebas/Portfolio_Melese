import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Send, MessageCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useCountUp } from '@/hooks/useCountUp';

function AnimatedStat({ stat, visible }: { stat: typeof personalInfo.stats[0]; visible: boolean }) {
  const value = useCountUp(stat.value, 2000, visible);
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {value.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-xs md:text-sm text-muted mt-1">{stat.label}</div>
    </div>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  const socialLinks = [
    { Icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { Icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { Icon: Send, href: personalInfo.social.telegram, label: 'Telegram' },
    { Icon: MessageCircle, href: personalInfo.social.whatsapp, label: 'WhatsApp' },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg noise"
    >
      {/* Ambient orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#00d4a8]/15 blur-[120px] pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-[#ff6b4a]/10 blur-[100px] pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * -60}px, ${mousePos.y * -30}px)` }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full bg-[#7c4dff]/10 blur-[100px] pointer-events-none"
        style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 50}px)` }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-soft mb-8 reveal is-visible">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[#00d4a8]" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4a8]" />
          </span>
          <span className="text-sm text-muted">Available for new projects</span>
          <Sparkles className="w-3.5 h-3.5 text-accent" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] reveal is-visible" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Hi, I'm <span className="gradient-text glow-text">{personalInfo.name}</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl text-muted font-medium">
            {personalInfo.title}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed reveal is-visible reveal-delay-1">
          {personalInfo.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 reveal is-visible reveal-delay-2">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3.5 rounded-xl bg-[#00d4a8] text-[#0a0a0f] font-semibold hover:shadow-xl hover:shadow-[#00d4a8]/30 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3.5 rounded-xl glass border border-soft text-main font-semibold hover:border-[#00d4a8]/40 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-20 reveal is-visible reveal-delay-3">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl glass border border-soft flex items-center justify-center text-muted hover:text-accent hover:border-[#00d4a8]/40 hover:scale-110 transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
          {personalInfo.stats.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} visible={statsVisible} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-soft flex items-start justify-center pt-2">
          <span className="w-1 h-2 rounded-full bg-[#00d4a8] animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}

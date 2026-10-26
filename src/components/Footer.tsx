import { Github, Linkedin, Send, MessageCircle, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  const socialLinks = [
    { Icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { Icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { Icon: Send, href: personalInfo.social.telegram, label: 'Telegram' },
    { Icon: MessageCircle, href: personalInfo.social.whatsapp, label: 'WhatsApp'},
  ];

  return (
    <footer className="relative py-12 border-t border-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4a8] to-[#00b8d4] flex items-center justify-center">
              <span className="text-[#0a0a0f] font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                A
              </span>
            </div>
            <span className="text-sm text-muted">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg glass border border-soft flex items-center justify-center text-muted hover:text-accent hover:border-[#00d4a8]/40 hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-300 group"
          >
            Back to top
            <span className="w-9 h-9 rounded-lg glass border border-soft flex items-center justify-center group-hover:border-[#00d4a8]/40 transition-colors duration-300">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

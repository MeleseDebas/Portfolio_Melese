import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/portfolio';
import { useTheme } from '@/hooks/useTheme';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => document.querySelector(l.href));
      const current = sections.findIndex((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current !== -1) setActive(navLinks[current].href);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-soft py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleClick('#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4a8] to-[#00b8d4] flex items-center justify-center group-hover:scale-110 transition-transform">
            <Terminal className="w-5 h-5 text-[#0a0a0f]" />
          </div>
          <span className="font-bold text-lg tracking-tight text-main" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {personalInfo.name.split(' ')[0]}<span className="text-accent">.</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative ${
                active === link.href
                  ? 'text-accent'
                  : 'text-muted hover:text-main'
              }`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00d4a8]" />
              )}
            </button>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="ml-2 w-10 h-10 rounded-lg glass border border-soft flex items-center justify-center text-muted hover:text-accent hover:scale-110 transition-all duration-300"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => handleClick('#contact')}
            className="ml-3 px-5 py-2 text-sm font-semibold rounded-lg bg-[#00d4a8] text-[#0a0a0f] hover:shadow-lg hover:shadow-[#00d4a8]/30 transition-all duration-300 hover:scale-105"
          >
            Let's Talk
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 text-main"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            className="p-2 text-main"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-soft mt-3">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                  active === link.href ? 'text-accent bg-[#00d4a8]/10' : 'text-muted'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

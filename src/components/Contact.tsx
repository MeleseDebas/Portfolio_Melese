import { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const result = await response.json();
      if (result.error) {
        throw new Error(result.error);
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
    }
  };

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl bg-main border border-soft text-main placeholder-[#606070] focus:border-[#00d4a8]/50 focus:outline-none focus:ring-2 focus:ring-[#00d4a8]/20 transition-all duration-300';

  return (
    <section ref={ref} id="contact" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 reveal">
          <span className="text-sm font-mono text-accent tracking-widest uppercase">05 / Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Let's Build Something
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4a8] to-transparent rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Info */}
          <div className="reveal space-y-6">
            <p className="text-lg text-muted leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities,
              creative ideas, or potential collaborations.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl glass border border-soft hover:border-[#00d4a8]/30 transition-colors duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#00d4a8]/10 border border-[#00d4a8]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted">Email</div>
                  <div className="text-sm font-medium">{personalInfo.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl glass border border-soft">
                <div className="w-11 h-11 rounded-lg bg-[#00d4a8]/10 border border-[#00d4a8]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted">Location</div>
                  <div className="text-sm font-medium">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-[#00d4a8]/10 to-[#7c4dff]/10 border border-soft">
              <p className="text-sm text-muted leading-relaxed">
                <span className="text-accent font-semibold">Currently available</span> for freelance work
                and full-time positions. Typical response time within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal reveal-delay-1 p-6 md:p-8 rounded-2xl bg-surface border border-soft space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-muted mb-2">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={inputClass}
                disabled={status === 'sending'}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={inputClass}
                disabled={status === 'sending'}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                className={`${inputClass} resize-none`}
                disabled={status === 'sending'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3.5 rounded-xl bg-[#00d4a8] text-[#0a0a0f] font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#00d4a8]/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-sm text-[#00d4a8]">
                <CheckCircle className="w-5 h-5" />
                Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm text-[#ff6b4a]">
                <AlertCircle className="w-5 h-5" />
                {errorMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import {
  Shield,
  Users,
  Star,
  ArrowRight,
  Mail,
  ChevronDown,
  Menu,
  X,
  Award,
  Handshake,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'Mission', href: '#mission' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Get Involved', href: '#involved' },
  { label: 'Contact', href: '#footer' },
];

const PILLARS = [
  {
    icon: Lightbulb,
    title: 'Visionary Thinking',
    description:
      'We cultivate forward-thinking leaders who challenge the status quo and pioneer innovative solutions for our community.',
  },
  {
    icon: Handshake,
    title: 'Collaborative Impact',
    description:
      'By bridging public, private, and civic sectors, we forge powerful partnerships that drive lasting positive change.',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Growth',
    description:
      'Our programs are built on evidence-based practices that ensure measurable, long-term community development.',
  },
  {
    icon: Award,
    title: 'Excellence & Integrity',
    description:
      'We hold ourselves to the highest standards of ethical leadership, transparency, and accountability.',
  },
];

const BOARD = [
  { name: 'Dr. Simone Carter', title: 'Board Chair', org: 'Broward Health System' },
  { name: 'Marcus J. Williams', title: 'Vice Chair', org: 'SunTrust Partners' },
  { name: 'Elena Reyes-Torres', title: 'Secretary', org: 'Nova Southeastern University' },
  { name: 'James Okonkwo', title: 'Treasurer', org: 'Deloitte South Florida' },
  { name: 'Patricia Holloway', title: 'Director', org: 'Broward County Public Schools' },
  { name: 'David Nguyen', title: 'Director', org: 'AutoNation' },
];

const STATS = [
  { value: '1,200+', label: 'Alumni Leaders' },
  { value: '31', label: 'Municipalities Served' },
  { value: '28', label: 'Years of Impact' },
  { value: '$4M+', label: 'Community Investment' },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-inter text-slate-800 bg-white overflow-x-hidden">
      {/* ── NAV ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-sky-700 flex items-center justify-center">
              <Shield size={18} className="text-white" />
            </div>
            <span
              className={`font-playfair font-bold text-lg leading-tight transition-colors ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              Broward<br />
              <span className="text-amber-500">Leadership Alliance</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  scrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            className={`md:hidden transition-colors ${scrolled ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left text-slate-700 font-medium hover:text-amber-500 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      >
        <img
          src="https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/80 via-sky-900/70 to-sky-950/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Star size={12} />
            Broward County, Florida
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Leading Together.<br />
            <span className="text-amber-400">Shaping Tomorrow.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10">
            The Broward Leadership Alliance unites civic, business, and community
            leaders to build a more equitable, prosperous, and connected Broward County.
          </p>
          <button
            onClick={() => scrollTo('#mission')}
            className="border border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Our Mission
          </button>
        </div>

        <button
          onClick={() => scrollTo('#stats')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown size={28} />
        </button>
      </section>

      {/* ── STATS ── */}
      <section id="stats" className="bg-sky-800 py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-playfair text-4xl font-bold text-amber-400 mb-1">{s.value}</div>
              <div className="text-sky-200 text-sm font-medium uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Our Mission</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
                Cultivating Leaders Who Move Broward Forward
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                The Broward Leadership Alliance is a coalition of business leaders, community stakeholders,
                and strategic partners dedicated to shaping the future of Broward County through economic
                growth, innovation, and civic engagement. Through our Executive Vision and Industry Series
                initiatives, we convene industry leaders, public officials, and key decision-makers to foster
                collaboration on the issues impacting Broward's infrastructure, business climate, and
                long-term livability.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our mission is to position Broward County as a premier destination to live, work, and invest
                by creating a direct pipeline between private-sector leadership and public policy discussions.
                We believe Broward's future should be driven by practical solutions, economic opportunity,
                and leadership that protects and expands opportunities for working families.
              </p>
              <a
                href="mailto:info@browardleadership.com"
                className="inline-flex items-center gap-2 text-sky-700 font-semibold hover:text-amber-500 transition-colors group"
              >
                Get in touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="bg-slate-50 hover:bg-sky-50 border border-slate-100 hover:border-sky-200 rounded-2xl p-6 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-100 group-hover:bg-sky-700 flex items-center justify-center mb-4 transition-colors">
                    <p.icon size={20} className="text-sky-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section id="leadership" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Board of Directors</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 mt-3 leading-tight">
              Guided by Exceptional Leaders
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              Our volunteer board represents the diversity and excellence of Broward County's leadership community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOARD.map((m) => (
              <div
                key={m.name}
                className="group border border-slate-100 hover:border-sky-200 rounded-2xl p-7 bg-white transition-all hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-700 to-sky-500 flex items-center justify-center mb-4">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">{m.name}</h3>
                <p className="text-amber-500 text-sm font-medium mt-0.5">{m.title}</p>
                <p className="text-slate-500 text-sm mt-1">{m.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ── */}
      <section id="involved" className="py-24 bg-sky-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #38bdf8 0%, transparent 60%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Get Involved</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
            Ready to Make Your Mark?
          </h2>
          <p className="text-sky-200 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you're an aspiring leader, a seasoned executive, or an organization looking to invest
            in Broward's future — there's a place for you in the Alliance.
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Star, label: 'Apply to a Program', desc: 'Enroll in our flagship or community cohorts.' },
              { icon: Handshake, label: 'Become a Partner', desc: 'Sponsor programs and shape our mission.' },
              { icon: Users, label: 'Volunteer', desc: 'Lend your expertise to sessions and events.' },
            ].map((c) => (
              <div
                key={c.label}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 transition-all"
              >
                <c.icon size={28} className="text-amber-400 mb-3 mx-auto" />
                <h3 className="text-white font-semibold mb-1">{c.label}</h3>
                <p className="text-sky-300 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="footer" className="bg-slate-900 py-14 text-center">
        <div className="max-w-md mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-full bg-sky-700 flex items-center justify-center">
              <Shield size={15} className="text-white" />
            </div>
            <span className="font-playfair font-bold text-white text-lg">
              Broward <span className="text-amber-400">Leadership Alliance</span>
            </span>
          </div>
          <a
            href="mailto:info@browardleadership.com"
            className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-amber-400 transition-colors text-sm mb-8"
          >
            <Mail size={15} className="text-amber-400 shrink-0" />
            info@browardleadership.com
          </a>
          <p className="text-slate-600 text-xs mt-6">
            &copy; {new Date().getFullYear()} Broward Leadership Alliance. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

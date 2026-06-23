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
  Megaphone,
  Target,
  Search,
  CheckCircle2,
  BadgeDollarSign,
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'Mission', href: '#mission' },
  { label: 'About', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Membership', href: '#membership' },
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
  { name: 'Anthony Paz', title: 'Chief Operating Officer', org: '' },
  { name: 'Ari Goldman', title: 'Chief Strategy Officer', org: '' },
];

const MEMBERSHIP_TIERS = [
  {
    level: 'Executive Committee',
    price: '$25,000',
    benefits: [
      'Involved in guidance of the organization',
      'Help vet candidates for support',
      'Part of the strategy team',
      'Access to all events',
      'Prominently featured in organizational materials',
      'Help identify private sector priorities',
      'Direct lobbying efforts on county & municipal issues',
      'Recognition in monthly newsletter',
      'Priority access to Alliance leadership & special briefings',
    ],
  },
  {
    level: 'Corporate',
    price: '$10,000',
    benefits: [
      'Support the Alliance mission',
      'Admission to Alliance events',
      'Recognition on select organizational materials',
      'Acknowledgment in monthly newsletter',
      'Input on key issues affecting the business community',
      'Periodic member briefings & networking opportunities',
    ],
  },
  {
    level: 'Small Business',
    price: '$5,000',
    benefits: [
      'Demonstrate commitment to better government',
      'Admission to Alliance events',
      'Recognition on the Alliance website',
      'Recognition on selected event materials',
      'Inclusion in member listings distributed to attendees & supporters',
    ],
  },
  {
    level: 'Individual',
    price: '$2,500',
    benefits: [
      'Support the Alliance mission',
      'Invitations to Alliance events',
      'Periodic organizational updates',
      'Recognition as an individual member of the Alliance',
    ],
  },
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

      {/* ── ABOUT US ── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Executive Vision Series</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-4 leading-tight">About Us</h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              The Broward Leadership Alliance (BLA) is a Political Action Committee (PAC) dedicated to advancing
              policies and supporting leaders who are committed to Broward County's long-term success. We bring
              together business leaders, entrepreneurs, community stakeholders, and public officials to strengthen
              collaboration between the private and public sectors. Through advocacy, civic engagement, and
              strategic partnerships, BLA works to promote economic growth, improve infrastructure, and encourage
              more efficient government. Our mission is to help make Broward County a better place to live, work,
              and invest.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR MISSION BANNER ── */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex-1 h-px bg-slate-200" />
            <Star size={18} className="text-amber-500 fill-amber-500 shrink-0" />
            <div className="flex-1 h-px bg-slate-200" />
          </div>
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-wide mb-5">
            Our Mission
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            To make Broward a modern and functional county. We challenge the progressive establishment in
            Broward in favor of competent government and foster a safe environment to grow businesses,
            create jobs, and improve the quality of life for all residents.
          </p>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-slate-200" />
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-wide whitespace-nowrap">
              What We Do
            </h3>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: Users,
                title: 'Build Community',
                desc: 'We bring together executives, business leaders, and community stakeholders to collaborate on solutions that move Broward forward.',
              },
              {
                icon: Search,
                title: 'Find & Highlight Leaders',
                desc: 'We identify and support candidates who share our vision for a stronger, safer, and more prosperous Broward County.',
              },
              {
                icon: Megaphone,
                title: 'Drive Impact',
                desc: 'Through advocacy, engagement, and strategic action, we promote policies that deliver results and put residents first.',
              },
              {
                icon: Award,
                title: 'Champion Competent Government',
                desc: 'We advocate for accountable leadership, efficient services, and fiscal responsibility to strengthen our communities.',
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-amber-500 flex items-center justify-center mb-4 group-hover:bg-amber-50 transition-colors">
                  <item.icon size={28} className="text-amber-600" />
                </div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR GOAL BANNER ── */}
      <section className="bg-sky-950 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full border-2 border-amber-500 flex items-center justify-center shrink-0">
            <Target size={30} className="text-amber-500" />
          </div>
          <div className="sm:border-l sm:border-amber-500/40 sm:pl-6">
            <h4 className="font-bold text-amber-400 uppercase tracking-widest text-sm mb-2">Our Goal</h4>
            <p className="text-slate-200 text-lg leading-relaxed">
              To foster collaboration, share actionable insights, and identify solutions that drive
              sustainable growth and high-quality development across Broward County.
            </p>
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
                {m.org && <p className="text-slate-500 text-sm mt-1">{m.org}</p>}
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

      {/* ── MEMBERSHIP ── */}
      <section id="membership" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Join the Alliance</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 mt-3 leading-tight">
              Membership Opportunities
            </h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mt-5" />
            <p className="mt-6 text-slate-500 text-lg leading-relaxed">
              Invest in Broward County's future. Choose the membership level that aligns with your commitment
              to better government and a stronger local economy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {MEMBERSHIP_TIERS.map((tier, idx) => (
              <div
                key={tier.level}
                className={`relative rounded-2xl border flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 ${
                  idx === 0
                    ? 'border-amber-400 bg-sky-950 text-white'
                    : 'border-slate-200 bg-white text-slate-800'
                }`}
              >
                {idx === 0 && (
                  <div className="bg-amber-500 text-white text-xs font-bold uppercase tracking-widest text-center py-2">
                    Most Exclusive
                  </div>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    idx === 0 ? 'bg-amber-500/20' : 'bg-sky-50'
                  }`}>
                    <BadgeDollarSign size={24} className={idx === 0 ? 'text-amber-400' : 'text-sky-700'} />
                  </div>
                  <h3 className={`font-playfair text-xl font-bold mb-1 ${idx === 0 ? 'text-white' : 'text-slate-900'}`}>
                    {tier.level}
                  </h3>
                  <p className={`text-3xl font-extrabold mb-1 ${idx === 0 ? 'text-amber-400' : 'text-sky-800'}`}>
                    {tier.price}
                  </p>
                  <p className={`text-xs font-medium uppercase tracking-wide mb-6 ${idx === 0 ? 'text-sky-400' : 'text-slate-400'}`}>
                    Annual Membership
                  </p>

                  <ul className="space-y-3 flex-1">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${idx === 0 ? 'text-amber-400' : 'text-sky-600'}`} />
                        <span className={`text-sm leading-snug ${idx === 0 ? 'text-sky-200' : 'text-slate-600'}`}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="mailto:info@browardleadership.com"
                    className={`mt-8 block text-center text-sm font-semibold py-3 px-5 rounded-full transition-colors ${
                      idx === 0
                        ? 'bg-amber-500 hover:bg-amber-400 text-white'
                        : 'border border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white'
                    }`}
                  >
                    Join Now
                  </a>
                </div>
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

import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  Mail,
  Phone,
  Linkedin,
  GraduationCap,
  ChevronRight,
  ExternalLink,
  Menu,
  X,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Users,
  BarChart3,
  ArrowUpRight,
  Zap,
  TrendingUp,
  Star
} from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { RESUME_DATA } from './constants';

// ─── Navbar ───────────────────────────────────────────────────────
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['about', 'projects', 'experience', 'skills', 'contact'];
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(s); break; }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a href="#" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tight text-white font-mono">
          Syed Ayad Ali<span className="text-[#00e5a0]">_</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.a key={link.name} href={link.href}
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === link.href.slice(1) ? 'text-[#00e5a0] bg-[#00e5a0]/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
              {link.name}
            </motion.a>
          ))}
          <motion.a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="ml-3 bg-[#00e5a0] text-[#0a0a0f] px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#00c988] transition-all flex items-center gap-2">
            <Linkedin size={14} /> LinkedIn
          </motion.a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f]/98 border-b border-white/10 overflow-hidden">
            <div className="flex flex-col p-6 gap-3">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-[#00e5a0] transition-colors py-2">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,160,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,160,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00e5a0]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00e5a0]/10 border border-[#00e5a0]/20 rounded-full text-[#00e5a0] text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 bg-[#00e5a0] rounded-full animate-pulse" />
              Regional Project Head – US East
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-6 tracking-tight">
              Syed<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5a0] to-[#00b4d8]">Ayad Ali</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Senior Project Manager & Regional Head delivering complex enterprise projects for Fortune 500 and US Government clients.
              <span className="text-white"> 10+ years of impact, $1.2M+ in managed contracts, and a reputation for turning chaos into clarity.</span>
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-14">
              <a href="#contact" className="group bg-[#00e5a0] text-[#0a0a0f] px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#00c988] transition-all flex items-center gap-2 shadow-lg shadow-[#00e5a0]/20">
                Get in Touch
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer"
                className="group border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-sm hover:border-[#00e5a0]/40 hover:bg-[#00e5a0]/5 transition-all flex items-center gap-2">
                <Linkedin size={16} className="text-[#00e5a0]" /> LinkedIn
              </a>
              <a href={`mailto:${RESUME_DATA.contact.email}`}
                className="border border-white/10 text-slate-400 px-8 py-4 rounded-xl font-bold text-sm hover:border-white/20 hover:text-white transition-all flex items-center gap-2">
                <Mail size={16} /> Email
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:flex flex-col gap-4">
            {[
              { value: '100+', label: 'Projects Delivered', icon: Rocket },
              { value: '$1.2M+', label: 'Contracts Managed', icon: TrendingUp },
              { value: '85%', label: 'Logo Retention 2025', icon: Users },
              { value: '87%', label: 'Booking Retention 2025', icon: BarChart3 },
            ].map(({ value, label, icon: Icon }, i) => (
              <motion.div key={label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 min-w-[200px] hover:border-[#00e5a0]/20 hover:bg-[#00e5a0]/[0.02] transition-all group">
                <Icon size={18} className="text-[#00e5a0] mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-black text-white mb-1">{value}</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
};

// ─── Trusted Brands ───────────────────────────────────────────────
const TrustedBrands = () => {
  const getLogoPath = (filename: string) => `${import.meta.env.BASE_URL}Logos/${filename}`;

  const brands = [
    { name: 'Amazon', logo: getLogoPath('Amazon.png') },
    { name: 'General Motors', logo: getLogoPath('GeneralMotors.png') },
    { name: 'UMGC', logo: getLogoPath('UMGC.png') },
    { name: 'Lilly', logo: getLogoPath('Lilly.png') },
    { name: 'DARPA', logo: getLogoPath('darpa.png') },
    { name: 'UAG', logo: getLogoPath('UAG.png') },
    { name: 'InvestMidwest', logo: getLogoPath('investmidwest.png') },
    { name: 'CTF', logo: getLogoPath('ctf.png') },
    { name: 'CNIB', logo: getLogoPath('cnib.png') },
    { name: 'Maxwell', logo: getLogoPath('maxwell.png') },
    { name: 'stride', logo: getLogoPath('stride.png') },
    { name: 'NationalUrbanLeague', logo: getLogoPath('nationalurbanleague.png') },
    { name: 'HSS', logo: getLogoPath('hss.png') },
    { name: 'Devry', logo: getLogoPath('devry.png') },
    { name: 'CMS', logo: getLogoPath('CMS.png') }
  ];

  return (
    <section className="py-20 bg-[#080810] overflow-hidden w-full relative">
      {/* Optional: A subtle section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mb-12 text-center"
      >
        <span className="text-xs font-bold text-[#00e5a0] uppercase tracking-widest">Trusted By</span>
        <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Industry Leaders & Partners</h2>
      </motion.div>

      {/* Full width scrolling area */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <motion.div
          className="flex items-center gap-20 w-max px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <img
              key={i}
              src={brand.logo}
              alt={`${brand.name} logo`}
              title={brand.name}
              className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};


// ─── Case Study Modal ─────────────────────────────────────────────
const CaseStudyModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  if (!project.caseStudy) return null;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}>
      <motion.div initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-[#0f0f18] border border-white/10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl p-8 md:p-12 relative"
        onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
          <X size={18} />
        </button>

        <div className="mb-10">
          <span className="text-xs font-bold text-[#00e5a0] uppercase tracking-widest">Case Study</span>
          <h3 className="text-3xl md:text-4xl font-black text-white mt-2 leading-tight">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0] text-xs font-bold rounded-full uppercase tracking-wider">{tag}</span>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {[
            { icon: BarChart3, label: 'Challenge', text: project.caseStudy.challenge, color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/20' },
            { icon: Rocket, label: 'Solution', text: project.caseStudy.solution, color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
            { icon: CheckCircle2, label: 'Results', text: project.caseStudy.results, color: 'text-[#00e5a0]', bg: 'bg-[#00e5a0]/10 border-[#00e5a0]/20' },
          ].map(({ icon: Icon, label, text, color, bg }) => (
            <div key={label} className={`p-6 rounded-2xl border ${bg}`}>
              <div className={`flex items-center gap-2 mb-3 ${color}`}>
                <Icon size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Projects ─────────────────────────────────────────────────────
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const icons = [BarChart3, Rocket, Users, ShieldCheck];

  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="text-xs font-bold text-[#00e5a0] uppercase tracking-widest">Impactful Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Prominent Projects</h2>
          <p className="text-slate-500 mt-4 max-w-xl">Real initiatives with measurable outcomes — click any card to read the full case study.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {RESUME_DATA.projects.map((project, i) => {
            const Icon = icons[i % icons.length];
            const isHovered = hoveredIdx === i;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative bg-white/[0.02] border rounded-2xl p-8 transition-all duration-300 flex flex-col h-full ${isHovered ? 'border-[#00e5a0]/30 bg-[#00e5a0]/[0.03] shadow-xl shadow-[#00e5a0]/5 cursor-pointer' : 'border-white/[0.06] hover:border-white/10'} ${project.caseStudy ? 'cursor-pointer' : ''}`}
                onClick={() => project.caseStudy && setSelectedProject(project)}>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isHovered ? 'bg-[#00e5a0] text-[#0a0a0f]' : 'bg-white/5 text-slate-400'}`}>
                    <Icon size={22} />
                  </div>
                  {project.caseStudy && (
                    <span className="text-xs font-bold text-[#00e5a0] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Case Study <ArrowUpRight size={12} />
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00e5a0] transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>
                <div className="flex items-start gap-3 bg-[#00e5a0]/5 border border-[#00e5a0]/10 rounded-xl p-4 mb-5">
                  <Zap size={14} className="text-[#00e5a0] mt-0.5 shrink-0" />
                  <p className="text-sm text-[#00e5a0] font-medium">{project.impact}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] text-slate-500 text-[10px] font-bold rounded-lg uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
};

// ─── Experience ───────────────────────────────────────────────────
const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="text-xs font-bold text-[#00e5a0] uppercase tracking-widest">Professional Journey</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Career Timeline</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          <div className="space-y-1">
            {RESUME_DATA.experience.map((exp, i) => (
              <button key={i} onClick={() => setActiveIndex(i)}
                className={`w-full text-left px-4 py-4 rounded-xl transition-all group ${activeIndex === i ? 'bg-[#00e5a0]/10 border border-[#00e5a0]/20' : 'border border-transparent hover:border-white/5 hover:bg-white/[0.02]'}`}>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${activeIndex === i ? 'text-[#00e5a0]' : 'text-slate-600'}`}>{exp.period}</p>
                <p className={`text-sm font-bold truncate ${activeIndex === i ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>{exp.title}</p>
                <p className={`text-xs mt-0.5 ${activeIndex === i ? 'text-[#00e5a0]/70' : 'text-slate-700'}`}>{exp.company}</p>
              </button>
            ))}
          </div>


          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-black text-white mb-1">{RESUME_DATA.experience[activeIndex].title}</h3>
                  <p className="text-[#00e5a0] font-bold">{RESUME_DATA.experience[activeIndex].company}</p>
                </div>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-slate-400 rounded-lg text-xs font-bold shrink-0">
                  {RESUME_DATA.experience[activeIndex].period}
                </span>
              </div>
              <ul className="space-y-3">
                {RESUME_DATA.experience[activeIndex].description.map((item, j) => (
                  <motion.li key={j} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: j * 0.06 }}
                    className="flex gap-3 text-slate-400 leading-relaxed text-sm">
                    <ChevronRight size={16} className="text-[#00e5a0] shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};


// ─── Video Testimonials ───────────────────────────────────────────
const VideoTestimonials = () => (
  <section id="testimonials" className="py-24 px-6 bg-[#080810]">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
        <span className="text-xs font-bold text-[#00e5a0] uppercase tracking-widest">Social Proof</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Client Testimonials</h2>
        <p className="text-slate-500 mt-4">Real feedback from real clients — watch what they have to say.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {RESUME_DATA.videoTestimonials.map((video, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group flex flex-col gap-4">

            {/* Video Container */}
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] group-hover:border-[#00e5a0]/40 transition-all shadow-lg shadow-black/20">
              <iframe src={video.url} title={video.title} className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
            </div>

            {/* Title Below Video */}
            <div className="px-2">
              <h3 className="text-lg font-bold text-white group-hover:text-[#00e5a0] transition-colors">{video.title}</h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Client Testimonial</p>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Skill Bar ────────────────────────────────────────────────────
const SkillBar = ({ name, level }: { name: string; level: string }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pct = level === 'Excellent' ? 95 : level === 'Very Good' ? 82 : 68;

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs font-bold text-[#00e5a0]">{pct}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-[#00e5a0] to-[#00b4d8] rounded-full" />
      </div>
    </div>
  );
};

// ─── Skills ───────────────────────────────────────────────────────
const Skills = () => (
  <section id="skills" className="py-24 px-6 bg-[#080810]">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <span className="text-xs font-bold text-[#00e5a0] uppercase tracking-widest">Expertise</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Skills & Competencies</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-6">Core Competencies</p>
          <div className="grid grid-cols-2 gap-3">
            {RESUME_DATA.skills.filter(s => s.category === 'Professional').map((skill, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 hover:border-[#00e5a0]/20 hover:bg-[#00e5a0]/[0.02] transition-all group">
                <div className="w-2 h-2 rounded-full bg-[#00e5a0] mb-3 group-hover:scale-125 transition-transform" />
                <p className="text-sm font-medium text-slate-300">{skill.name}</p>
                <p className="text-xs text-slate-600 mt-1">{skill.level}</p>
              </motion.div>
            ))}
          </div>

        </div>

        <div>
          <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-6">Proficiency Levels</p>
          <div className="space-y-5">
            {RESUME_DATA.skills.map((skill, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <SkillBar name={skill.name} level={skill.level} />
              </motion.div>
            ))}
          </div>


        </div>
        <div className="mt-10 space-y-4">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-6">Education</p>
          {RESUME_DATA.education.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-[#00e5a0]/20 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#00e5a0]/10 flex items-center justify-center text-[#00e5a0] shrink-0 group-hover:bg-[#00e5a0] group-hover:text-[#0a0a0f] transition-all">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#00e5a0] mb-1">{edu.period}</p>
                <p className="font-bold text-white text-sm">{edu.degree}</p>
                <p className="text-sm text-slate-500">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── G2 Reviews ───────────────────────────────────────────────────
const G2Reviews = () => (
  <section className="py-24 px-6 bg-[#0a0a0f]">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="text-xs font-bold text-[#00e5a0] uppercase tracking-widest">Market Recognition</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">G2 Reviews</h2>
        </div>
        <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] px-5 py-3 rounded-xl">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
          <span className="text-sm font-bold text-white ml-1">4.5 / 5</span>
          <span className="text-xs text-slate-600">1000+ reviews</span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {RESUME_DATA.g2Reviews.map((review, i) => (
          <motion.a key={i} href={review.url} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00e5a0]/20 hover:bg-[#00e5a0]/[0.02] transition-all block">
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, j) => <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">"{review.snippet}"</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-white text-sm">{review.author}</p>
                <p className="text-xs text-slate-600">Verified G2 Review</p>
              </div>
              <ExternalLink size={16} className="text-slate-700 group-hover:text-[#00e5a0] transition-colors" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

// ─── Contact ──────────────────────────────────────────────────────
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/mykbnebk', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else { setStatus('error'); setTimeout(() => setStatus('idle'), 5000); }
    } catch { setStatus('error'); setTimeout(() => setStatus('idle'), 5000); }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#080810] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,229,160,0.04)_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="text-xs font-bold text-[#00e5a0] uppercase tracking-widest">Let's Connect</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Start a Conversation</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-slate-400 leading-relaxed mb-8">
              Open to new opportunities, strategic partnerships, and interesting conversations about product and project leadership.
            </p>
            {[
              { icon: Mail, label: 'Email', value: RESUME_DATA.contact.email, href: `mailto:${RESUME_DATA.contact.email}` },
              { icon: Phone, label: 'Phone', value: RESUME_DATA.contact.phone, href: `tel:${RESUME_DATA.contact.phone}` },
              { icon: Linkedin, label: 'LinkedIn', value: 'View Profile →', href: RESUME_DATA.contact.linkedin },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 bg-white/[0.02] border border-white/[0.06] rounded-xl hover:border-[#00e5a0]/20 hover:bg-[#00e5a0]/[0.02] transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#00e5a0]/10 flex items-center justify-center text-[#00e5a0] shrink-0 group-hover:bg-[#00e5a0] group-hover:text-[#0a0a0f] transition-all">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-bold uppercase tracking-wider">{label}</p>
                  <p className="text-white font-medium text-sm">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="text-center py-12">
                  <div className="w-16 h-16 bg-[#00e5a0]/10 border border-[#00e5a0]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={28} className="text-[#00e5a0]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-500 text-sm">I'll get back to you shortly.</p>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-12">
                  <p className="text-red-400 font-medium">Something went wrong. Please try emailing directly.</p>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-5">
                    {[
                      { label: 'Full Name', key: 'name', type: 'text', placeholder: 'John Doe' },
                      { label: 'Email', key: 'email', type: 'email', placeholder: 'john@example.com' },
                    ].map(({ label, key, type, placeholder }) => (
                      <div key={key} className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
                        <input required type={type} value={(formData as any)[key]}
                          onChange={e => setFormData({ ...formData, [key]: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00e5a0]/40 transition-all placeholder:text-slate-700"
                          placeholder={placeholder} />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                    <textarea required rows={4} value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00e5a0]/40 transition-all resize-none placeholder:text-slate-700"
                      placeholder="What are you working on?" />
                  </div>
                  <button disabled={status === 'sending'}
                    className="w-full bg-[#00e5a0] text-[#0a0a0f] font-bold py-3.5 rounded-xl hover:bg-[#00c988] transition-all text-sm disabled:opacity-50 flex items-center justify-center gap-2">
                    {status === 'sending' ? (
                      <><div className="w-4 h-4 border-2 border-[#0a0a0f]/30 border-t-[#0a0a0f] rounded-full animate-spin" />Sending...</>
                    ) : 'Send Message'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-slate-700 text-xs">© {new Date().getFullYear()} {RESUME_DATA.name}. Crafted with precision.</p>
      </footer>
    </section>
  );
};

// ─── App ──────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="font-sans bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <TrustedBrands />
        <VideoTestimonials />
        <G2Reviews />
        <Contact />
      </main>
    </div>
  );
}

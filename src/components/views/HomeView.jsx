import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Workflow, 
  Users, 
  Mail, 
  Globe,
  ChevronRight,
  Star,
  Quote,
  Layers,
  Cpu,
  Code,
  Bot,
  Terminal,
  Database,
  BarChart3,
  TrendingUp,
  Award
} from 'lucide-react';
import { industriesList } from '../../data/industriesData';
import AuditForm from '../common/AuditForm';
import ServicesCarousel from '../common/ServicesCarousel';
import CoreSolutionsCarousel from '../common/CoreSolutionsCarousel';
import CaseStudiesSection from '../common/CaseStudiesSection';
import ServicesTileGrid from '../common/ServicesTileGrid';
// Industry Solutions for Carousel
const homeCoreSolutions = [
  {
    id: 'fintech',
    title: 'Banking, Finance & FinTech',
    summary: 'In today’s digital-first economy, the banking and financial services sector must deliver seamless customer experiences, ensure robust security, and adapt to evolving regulations. NForceOne supports banks, fintechs, and financial institutions with intelligent, compliant, and scalable technology solutions.',
    icon: ShieldCheck,
    tag: 'FINANCIAL SERVICES',
    image: '/images/indian_bank.jpg'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Telemedicine',
    summary: 'HIPAA-compliant software development, medical IoT testing, EHR integration, and telehealth app engineering for modern healthcare providers. We ensure your healthcare applications are fully secure and compliant.',
    icon: Code,
    tag: 'HEALTHCARE QA',
    image: '/images/indian_hospital.jpg'
  },
  {
    id: 'isv',
    title: 'ISV & SaaS Software Vendors',
    summary: 'Helping software vendors build scalable, secure, and high-performing applications through modern DevOps, testing, and AI integrations. We act as an engineering accelerator to scale your SaaS products.',
    icon: Bot,
    tag: 'PRODUCT ENGINEERING',
    image: '/images/indian_saas_office.jpg'
  },
  {
    id: 'retail',
    title: 'Retail & eCommerce',
    summary: 'Supporting omni-channel retailers and digital-first brands with scalable, secure, and intelligent solutions that drive conversions and loyalty. From click to doorstep, we deliver frictionless commerce.',
    icon: Workflow,
    tag: 'COMMERCE SOLUTIONS',
    image: '/images/indian_retail_store.jpg'
  },
  {
    id: 'telecom',
    title: 'Telecommunications',
    summary: 'Helping telecom providers modernize their infrastructure, automate customer service, and derive intelligence from network data — enhancing service reliability, reducing churn, and driving subscriber satisfaction.',
    icon: CheckCircle2,
    tag: 'TELECOM SOLUTIONS',
    image: '/images/indian_telecom_infrastructure.jpg'
  },
  {
    id: 'automotive',
    title: 'Automotive & Connected Mobility',
    summary: 'Enabling automotive OEMs, suppliers, and mobility providers to embrace smart manufacturing, connected telematics, and digital twins, delivering exceptional vehicle software intelligence and safety.',
    icon: Terminal,
    tag: 'CONNECTED MOBILITY',
    image: '/images/indian_automotive_factory.jpg'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    summary: 'Modernizing IT systems, optimizing supply chains, and unlocking real-time Industry 4.0 shop floor visibility. We help manufacturing firms design industrial IoT monitoring and simulation models.',
    icon: Database,
    tag: 'SMART FACTORY',
    image: '/images/indian_manufacturing_plant.jpg'
  },
  {
    id: 'energy-utilities',
    title: 'Energy & Utilities',
    summary: 'Modernizing utility grid reliability, sustainable energy trading, smart metering, and ESG carbon footprint tracking. We help utilities build intelligent forecasting and grid platforms.',
    icon: BarChart3,
    tag: 'SUSTAINABILITY GRID',
    image: '/images/indian_solar_energy.jpg'
  }
];

// Hero Slider: Variations of TestingXperts hero section designed for Indian enterprises
const heroSlides = [
  {
    id: 'custom-software',
    titleLead: 'Engineering High-Performance',
    titleHighlight: 'Custom Software',
    titleTail: 'for Modern Enterprises',
    subtitle: 'We design, build, and deploy custom web, mobile, and cloud-native software solutions tailored to your unique workflows.',
    image: '/images/indian_office_collaboration.jpg',
    primaryCta: { label: 'Explore Our Services', tab: 'services' },
    secondaryCta: { label: 'Schedule a Consultation', tab: 'contact' }
  },
  {
    id: 'ai-quality-engineering',
    titleLead: 'AI-Led Quality Engineering for',
    titleHighlight: 'Enterprise Confidence',
    titleTail: 'at Scale',
    subtitle: 'Quality is no longer a final checkpoint. We engineer continuous quality across systems, data pipelines, and automated workflows.',
    image: '/images/indian_software_testing.jpg',
    primaryCta: { label: 'Explore Quality Engineering', tab: 'services' },
    secondaryCta: { label: 'Schedule a Consultation', tab: 'contact' }
  },
  {
    id: 'certified-pega',
    titleLead: 'Accelerating Workflows with',
    titleHighlight: 'Certified Pega',
    titleTail: 'Enterprise Systems',
    subtitle: 'Streamline enterprise workflows with certified Pega architects, CRM integrations, and dedicated QA testing.',
    image: '/images/indian_tech_team.jpg',
    primaryCta: { label: 'Explore Pega Solutions', tab: 'services' },
    secondaryCta: { label: 'Schedule a Consultation', tab: 'contact' }
  }
];

// Value Pillars from home.md
const valuePillars = [
  {
    id: '01',
    title: 'Cost-effectiveness',
    description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.',
    icon: TrendingUp,
    image: '/images/DataAnalytics.png'
  },
  {
    id: '02',
    title: 'Innovative Technology',
    description: 'We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.',
    icon: Cpu,
    image: '/images/SoftwareDevelopment.png'
  },
  {
    id: '03',
    title: 'Industry Expertise',
    description: 'We specialize in serving specific industries, such as healthcare, finance, telecom, or manufacturing, and offer tailored solutions that meet your unique needs.',
    icon: Award,
    image: '/images/cloud_devops.jpg'
  },
  {
    id: '04',
    title: 'Scalability',
    description: 'Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.',
    icon: Layers,
    image: '/images/databasemanagement.png'
  }
];

// Customer Reviews from home.md
const customerReviews = [
  {
    quote: "NForce One implemented such a powerful platform that we had no break in service when our employees had to work from home due to the COVID-19 pandemic. We weren’t concerned about how to shift to a remote working environment because Integris facilitated a seamless transition.",
    author: "Amanda Parks",
    title: "Network Manager, Healthcare Organization",
    rating: 5
  },
  {
    quote: "Nforce One has been an outstanding partner. Their team is professional, knowledgeable and customer-service driven. NForce One's proactive collaborative approach has been critical in helping us build an IT infrastructure that enables our success today and supports our long-term positioning strategy.",
    author: "John Labkins",
    title: "Partner & CEO, Telecommunication Company",
    rating: 5
  },
  {
    quote: "I’ve been a customer for more than a decade. NForce One is an example of the way Managed Services should be done. They do their very best to make sure you succeed. If there’s an issue, they step in immediately. We will continue to be a customer for years to come.",
    author: "Daniel Legrante",
    title: "CIO, Restaurant Product Supplier",
    rating: 5
  }
];


// Lightweight, high-performance canvas background rendering horizontal speed trails (matching the streaks in NForceOne logo, adapted for light mode)
function NForceLogoBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Speed trails definition (matching the horizontal red streaks in the logo)
    const trails = [];
    const count = 30;

    for (let i = 0; i < count; i++) {
      trails.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 200 + 80,
        speed: Math.random() * 2.2 + 0.8,
        thickness: Math.random() * 2.0 + 0.8,
        alpha: Math.random() * 0.40 + 0.15,
        color: Math.random() > 0.4 ? 'rgba(230, 0, 0, ' : 'rgba(63, 63, 70, '
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < count; i++) {
        const t = trails[i];
        
        ctx.beginPath();
        ctx.moveTo(t.x, t.y);
        ctx.lineTo(t.x + t.length, t.y);
        ctx.strokeStyle = `${t.color}${t.alpha})`;
        ctx.lineWidth = t.thickness;
        ctx.stroke();

        t.x += t.speed;

        if (t.x > canvas.width) {
          t.x = -t.length;
          t.y = Math.random() * canvas.height;
          t.speed = Math.random() * 2.2 + 0.8;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-90 z-0"
    />
  );
}

// Modern, high-end visual showcase rendering plain localized images in a frame inspired by the reference design, adapted for light cream backgrounds
function HeroVisualShowcase({ activeSlide }) {
  const images = [
    '/images/indian_office_collaboration.jpg',
    '/images/indian_software_testing.jpg',
    '/images/indian_tech_team.jpg'
  ];

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/12] max-w-[500px] mx-auto select-none group">
      {/* Brand Red Glow behind the frame */}
      <div className="absolute -inset-6 bg-red-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

      {/* Reference Image Style Frame: Large Outer Container with Translucent Border and Padding (Light Mode optimized) */}
      <div className="relative w-full h-full p-6 sm:p-8 rounded-[2.5rem] border border-black/[0.05] bg-black/[0.01] backdrop-blur-xl shadow-2xl flex flex-col justify-stretch transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-red-600/10 hover:bg-black/[0.02]">
        
        {/* Inner Image Container */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-black/[0.08] bg-white flex items-stretch shadow-md">
          <AnimatePresence>
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={images[activeSlide]}
                alt="NForceOne Showcase"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-103"
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.1] to-transparent pointer-events-none mix-blend-overlay z-10" />
        </div>
      </div>
    </div>
  );
}

export default function HomeView({ setCurrentTab, navigateToService, navigateToIndustry }) {

  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];
  const goToSlide = (idx) => setActiveSlide((idx + heroSlides.length) % heroSlides.length);

  // Auto-scroll the hero slider every 3s, looping continuously.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex-1 bg-white text-neutral-900">

      {/* 1. HERO SECTION: split layout with left copy + right interactive visual showcase */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-[#F4EFE6] text-neutral-900 border-b border-neutral-200/60 py-20 lg:py-24">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293703_1px,transparent_1px),linear-gradient(to_bottom,#1f293703_1px,transparent_1px)] bg-[size:4rem_4rem] z-10" />
        
        {/* Customized NForce logo-matching speed trails background animation (running safely in background layer) */}
        <NForceLogoBackground />

        {/* Ambient Brand Red Glows */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-red-600/[0.03] rounded-full blur-[130px] hidden lg:block" />
          <div className="absolute left-[-10%] top-[-10%] w-[400px] h-[400px] bg-red-600/[0.015] rounded-full blur-[110px]" />
        </div>

        <div className="relative z-20 max-w-[1280px] mx-auto px-6 w-full grid grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Subtitle, and CTAs (text/header part kept as is) */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-start justify-center space-y-6 min-h-[320px] lg:min-h-[380px]">

            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1] max-w-4xl">
              {slide.titleLead}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-neutral-800">{slide.titleHighlight}</span>{' '}
              {slide.titleTail}
            </h1>

            <p className="text-neutral-600 text-base font-normal leading-relaxed max-w-2xl">
              {slide.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => { setCurrentTab(slide.primaryCta.tab); window.scrollTo(0, 0); }}
                className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-[0_8px_30px_rgba(230,0,0,0.18)] transition-all hover:-translate-y-1 active:scale-95"
              >
                {slide.primaryCta.label}
              </button>

              <button
                onClick={() => { setCurrentTab(slide.secondaryCta.tab); window.scrollTo(0, 0); }}
                className="px-8 py-4 border border-neutral-300 text-neutral-800 hover:bg-neutral-900 hover:text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all hover:-translate-y-1 active:scale-95 bg-white/40"
              >
                {slide.secondaryCta.label}
              </button>
            </div>

          </div>

          {/* Right Column: Redesigned Images/Dashboard Showcase */}
          <div className="col-span-12 lg:col-span-5 w-full relative z-30 flex items-center justify-center">
            <HeroVisualShowcase activeSlide={activeSlide} />
          </div>

        </div>



        {/* Slider controls: prev/next + dot indicators */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-10">
          <button
            onClick={() => goToSlide(activeSlide - 1)}
            aria-label="Previous slide"
            className="flex items-center gap-2 px-4 sm:px-5 py-4 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <span aria-hidden="true">&#8592;</span>
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="flex items-center gap-2 pb-4">
            {heroSlides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all shadow-sm ${idx === activeSlide ? 'w-8 bg-red-600' : 'w-1.5 bg-neutral-300 hover:bg-neutral-600'}`}
              ></button>
            ))}
          </div>

          <button
            onClick={() => goToSlide(activeSlide + 1)}
            aria-label="Next slide"
            className="flex items-center gap-2 px-4 sm:px-5 py-4 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <span className="hidden sm:inline">Next</span>
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      </section>

      {/* 2. METRIC BAR: Impact & Proven Enterprise Numbers from home.md */}
      <section className="bg-red-700 pt-12 pb-6 text-white border-b border-red-800">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="flex flex-col border-l-2 border-white/30 pl-6 space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">100+</span>
              <span className="text-xs font-bold text-red-100 uppercase tracking-wider">Enterprise Engagements Delivered</span>
            </div>

            <div className="flex flex-col border-l-2 border-white/30 pl-6 space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">99.9%</span>
              <span className="text-xs font-bold text-red-100 uppercase tracking-wider">Defect Leakage Prevention</span>
            </div>

            <div className="flex flex-col border-l-2 border-white/30 pl-6 space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">70%</span>
              <span className="text-xs font-bold text-red-100 uppercase tracking-wider">Reduction in Test Cycle</span>
            </div>

            <div className="flex flex-col border-l-2 border-white/30 pl-6 space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">24/7</span>
              <span className="text-xs font-bold text-red-100 uppercase tracking-wider">Continuous Delivery (US & India)</span>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO: Transforming Software Quality & Digital Engineering (from home.md) */}
      <ServicesCarousel
        eyebrow="WHAT WE DO"
        title="Transforming Software Quality & Digital Engineering"
        items={valuePillars}
      />

      {/* 5. CORE SOLUTIONS: Asymmetric Bento Grid (from home.md) */}
      <section className="pt-12 pb-24 bg-[#DACAA4] border-b border-black/[0.04] relative overflow-hidden">
        {/* Subtle full-width background blueprint grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-[1280px] mx-auto px-6 space-y-10 relative z-10">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="block text-xs font-bold text-neutral-500 tracking-[0.2em] uppercase">
                INDUSTRIES WE SERVE
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight mt-2">
                Industry Solutions
              </h2>
            </div>
            <button 
              onClick={() => { setCurrentTab('industries'); window.scrollTo(0, 0); }}
              className="text-xs font-bold text-neutral-800 border-b border-neutral-400 pb-1 hover:text-red-700 hover:border-red-700 transition-colors uppercase tracking-wider flex items-center gap-1.5 focus-visible:outline-none"
            >
              <span>VIEW ALL INDUSTRIES</span>
              <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          <CoreSolutionsCarousel
            items={homeCoreSolutions}
            onSelect={(id) => {
              const indData = industriesList.find(i => i.id === id);
              if (indData) navigateToIndustry(indData);
            }}
          />

        </div>
      </section>

      {/* 6. FEATURED CASE STUDY & CLIENT ROI: from home.md */}
      <CaseStudiesSection />

      {/* 7. SERVICES WE OFFER: Transforming Software Quality & Digital Engineering (Accenture Tile Grid Layout) */}
      <ServicesTileGrid 
        navigateToService={navigateToService}
        setCurrentTab={setCurrentTab}
      />

      {/* 8. WHAT OUR CUSTOMERS SAY: Reviews from home.md */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-[1280px] mx-auto px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-red-600 uppercase tracking-[0.2em]">WHAT OUR CUSTOMERS SAY</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Client Reviews & Testimonials
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerReviews.map((rev, idx) => (
              <div key={idx} className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-red-600">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-red-200" />
                  <p className="text-neutral-700 text-xs italic leading-relaxed">"{rev.quote}"</p>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <div className="font-bold text-neutral-900 text-sm">{rev.author}</div>
                  <div className="text-neutral-500 text-xs">{rev.title}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. PARTNER WITH US & HOW IT WORKS: from home.md */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 grid lg:grid-cols-12 gap-12 items-center shadow-2xl">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-red-500 uppercase tracking-[0.2em]">CONTACT US</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Partner with Us to Build and Scale with Confidence
              </h2>
              <p className="text-zinc-300 text-sm leading-relaxed">
                We help businesses turn ideas into scalable, secure, and production-ready software. From product strategy and design to development, QA, DevOps, and beyond.
              </p>

              <div className="space-y-4 pt-2">
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider">How It Works:</div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0">1</div>
                    <p className="text-xs text-zinc-300">We schedule a discovery call at your convenience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0">2</div>
                    <p className="text-xs text-zinc-300">We assess your goals, tech landscape, and business workflows</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0">3</div>
                    <p className="text-xs text-zinc-300">We deliver a tailored solution proposal and execution roadmap</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-zinc-400 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-red-500 shrink-0" />
                  <span>admin@nforceone.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Hyderabad, India · Plano / Dallas, USA</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <AuditForm />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

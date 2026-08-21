import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ShieldCheck,
  Workflow,
  Users,
  Mail,
  Globe,
  ChevronRight,
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
import CaseStudySection from '../common/CaseStudySection';
import CoreSolutionsGrid from '../common/CoreSolutionsGrid';
import IndustryCardGrid from '../common/IndustryCardGrid';
import ParallaxFeatureSection from '../common/ParallaxFeatureSection';
import ScaleAtSpeedSection from '../common/ScaleAtSpeedSection';
import TestimonialsSection from '../common/TestimonialsSection';

// Core Solutions from home.md
const homeCoreSolutions = [
  {
    id: 'quality-engineering',
    title: 'Quality Engineering',
    summary: 'Comprehensive manual, automated, functional, regression, mobile, API, and cloud testing to ensure software reliability and defect-free delivery.',
    icon: ShieldCheck,
    tag: 'QA & AUTOMATION',
    image: '/images/Quality_Engineering.jpg'
  },
  {
    id: 'software-development',
    title: 'Software Development',
    summary: 'Custom web, mobile, microservices, and enterprise application development tailored to your business roadmap.',
    icon: Code,
    tag: 'ENGINEERING',
    image: '/images/Software_Development.png'
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    summary: 'Generative AI, LLM integration, conversational chatbots, computer vision, and predictive analytics to drive intelligent automation.',
    icon: Bot,
    tag: 'EMERGING TECH',
    image: '/images/artificial-intelligence.jpg'
  },
  {
    id: 'pega-development',
    title: 'Pega Development',
    summary: 'Enterprise BPM and CRM automation with certified Pega architects to streamline complex business workflows.',
    icon: Workflow,
    tag: 'ENTERPRISE BPM',
    image: '/images/Pega_Development.avif'
  },
  {
    id: 'pega-testing',
    title: 'Pega Testing',
    summary: 'End-to-end functional, performance, and regression testing for Pega applications using industry best practices.',
    icon: CheckCircle2,
    tag: 'PEGA QA',
    image: '/images/Pega_Testing.jpg'
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud Infrastructure',
    summary: 'Automation, CI/CD pipelines, containerization, IaC, and security compliance across AWS, Azure, and GCP.',
    icon: Terminal,
    tag: 'CLOUD & DEVOPS',
    image: '/images/cloud_devops.jpg'
  },
  {
    id: 'database-management',
    title: 'Database Management',
    summary: 'Database architecture, migration, performance tuning, and 24/7 administration for high-availability systems.',
    icon: Database,
    tag: 'DATA INFRASTRUCTURE',
    image: '/images/databasemanagement.jpg'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    summary: 'Advanced data pipelines, business intelligence dashboards, and big data engineering for actionable insights.',
    icon: BarChart3,
    tag: 'ANALYTICS',
    image: '/images/DataAnalytics.jpg'
  }
];

// Featured Case Study & Client ROI from home.md
const homeCaseStudies = [
  {
    id: 'modozo',
    client: 'Modozo: Streamlining Fashion Production from Design to Delivery',
    summary: 'Indian fashion brands often rely on disconnected tools like Excel, WhatsApp, and email to manage production, creating delays, communication gaps, and limited visibility across the supply chain. Modozo brings the entire workflow into one platform, enabling brands to create and share techpacks, collaborate with stakeholders, connect with verified vendors, place orders, track production, and manage quality control in one streamlined process.',
    image: '/images/modozo_case_study.jpg',
    imagePosition: 'center 15%',
    stats: [
      { value: '70%', label: 'Reduction in Manual Processes*' },
      { value: '80%', label: 'Improved Team Collaboration*' }
    ],
    disclaimer: "*Illustrative KPIs based on Modozo's stated platform goals; not independently measured."
  },
  {
    id: 'nforce-arena',
    client: 'NForce Arena: End-to-End Cricket Tournament Management',
    summary: 'Managing tournaments across organizers, players, teams, grounds, and umpires required multiple disconnected workflows, resulting in scheduling conflicts, manual coordination, and limited visibility into tournament operations. NForceOne delivered a scalable modular monolith with secure JWT authentication, multi-role access control, automated tournament workflows, fixture management, standings generation, transactional email notifications, and a cloud-native architecture ready for Azure deployment.',
    image: '/images/nforce_arena_cricket.jpg',
    stats: [
      { value: '80%', label: 'Reduction in Manual Tournament Coordination*' },
      { value: '100%', label: 'Centralized Tournament Lifecycle Management' }
    ],
    disclaimer: '*Illustrative KPI for marketing purposes; not measured in the PRD.'
  }
];

// SAMPLE testimonial copy, placeholder only, swap in verified client quotes (with their
// sign-off) before this ships to production.
const homeTestimonials = [
  {
    id: 'testimonial-qa',
    text: 'NForceOne\'s QA team caught regressions our in-house testers consistently missed. Their automated suite cut our release cycle time significantly while raising our defect-escape rate.',
    name: 'Client Name',
    role: 'VP of Engineering, Fintech Platform'
  },
  {
    id: 'testimonial-dev',
    text: 'We came to NForceOne needing a microservices rebuild under a tight deadline. Their development team shipped a production-ready platform without cutting corners on architecture.',
    name: 'Client Name',
    role: 'CTO, Enterprise SaaS Company'
  },
  {
    id: 'testimonial-pega',
    text: 'Their certified Pega architects untangled years of workflow debt and automated processes that used to take our operations team days to run manually.',
    name: 'Client Name',
    role: 'Director of Operations, Healthcare Provider'
  }
];

// Hero Slider: slide 1 copy is the existing home.md hero copy;
// slides 2-3 summarize Quality Engineering/Software Development and AI/Cloud/Data solutions.
const heroSlides = [
  {
    id: 'scale-at-speed',
    titleLead: 'Transforming Technology with',
    titleHighlight: 'Lightning Speed',
    titleTail: 'and Exceptional Quality',
    subtitle: "We're on a mission to revolutionize businesses through transformative technology solutions.",
    image: '/images/hero_ai_professional.jpg',
    primaryCta: { label: 'Schedule a Free Consultation', tab: 'contact' },
    secondaryCta: { label: 'Explore Services', tab: 'services' }
  },
  {
    id: 'quality-engineering',
    titleLead: 'Powering Innovation with AI',
    titleHighlight: 'Automation & Software Testing',
    titleTail: 'at Enterprise Scale',
    subtitle: 'Manual and automated QA, functional and regression testing, and custom web, mobile, and enterprise application development built to ship reliably, fast.',
    image: '/images/hero_quality_engineering.jpg',
    primaryCta: { label: 'Explore Quality Engineering', tab: 'services' },
    secondaryCta: { label: 'Schedule a Free Consultation', tab: 'contact' }
  },
  {
    id: 'ai-cloud-data',
    titleLead: 'Accelerating Success with',
    titleHighlight: 'AI & Software',
    titleTail: 'Development',
    subtitle: 'Custom application development, microservices architecture, API integration, and modern full-stack solutions, engineered to scale with your business.',
    image: '/images/hero_ai_cloud_data.jpg',
    primaryCta: { label: 'Explore AI & Cloud Solutions', tab: 'services' },
    secondaryCta: { label: 'Schedule a Free Consultation', tab: 'contact' }
  }
];

// Value Pillars from home.md
const valuePillars = [
  {
    id: '01',
    title: 'Cost-effectiveness',
    description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.',
    detail: 'From flexible engagement models to right-shored delivery teams, we structure every engagement to lower your total cost of ownership without compromising on quality or speed.',
    icon: TrendingUp,
    image: '/images/cost_effectiveness.jpg'
  },
  {
    id: '02',
    title: 'Innovative Technology',
    description: 'We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.',
    detail: 'Our engineers continuously evaluate emerging frameworks, AI tooling, and cloud-native patterns, so the solutions we build for you are never running on yesterday’s stack.',
    icon: Cpu,
    image: '/images/innovative_technology.jpg'
  },
  {
    id: '03',
    title: 'Industry Expertise',
    description: 'We specialize in serving specific industries, such as healthcare, finance, telecom, or manufacturing, and offer tailored solutions that meet your unique needs.',
    detail: 'Deep domain knowledge means less time explaining your business and more time solving it. Our teams already understand your compliance landscape, workflows, and users.',
    icon: Award,
    image: '/images/industry_expertise.jpg'
  },
  {
    id: '04',
    title: 'Scalability',
    description: 'Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.',
    detail: 'Architected for growth from day one, our systems flex with demand spikes and expanding user bases so you never have to rebuild the foundation to scale up.',
    icon: Layers,
    image: '/images/Scalability.jpg'
  }
];

export default function HomeView({ setCurrentTab, navigateToService, navigateToIndustry }) {
  const featuredIndustryIds = ['telecom', 'healthcare', 'finance-fintech', 'isv'];
  const featuredIndustries = featuredIndustryIds.map(id => industriesList.find(i => i.id === id)).filter(Boolean);

  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];
  const goToSlide = (idx) => setActiveSlide((idx + heroSlides.length) % heroSlides.length);

  // Auto-scroll the hero slider every 4s, looping continuously.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex-1 bg-white text-neutral-900">

      {/* 1. HERO SECTION: image slider (3 slides) with overlay copy + prev/next controls */}
      <section className="relative w-full h-[85svh] sm:h-[85vh] flex items-start overflow-hidden bg-neutral-950 text-white border-b border-zinc-800 pt-12 sm:pt-16 lg:pt-20 pb-32 sm:pb-36 lg:pb-40">

        {/* Slide backgrounds (crossfade, shown at full brightness). Overlay eases from
            near-opaque on the left (behind the text) to a light, consistent tint on the
            right, so the photo emerges gradually instead of via a hard-edged split. */}
        <div className="absolute inset-0">
          {heroSlides.map((s, idx) => (
            <div
              key={s.id}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1000ms] ease-in-out ${idx === activeSlide ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.82) 22%, rgba(0,0,0,0.72) 36%, rgba(0,0,0,0.55) 48%, rgba(0,0,0,0.38) 58%, rgba(0,0,0,0.24) 68%, rgba(0,0,0,0.14) 80%, rgba(0,0,0,0.08) 100%), url('${s.image}')`,
                backgroundPosition: s.imagePosition || 'center',
              }}
              aria-hidden="true"
            ></div>
          ))}
        </div>

        {/* Scrim: darkens the text/controls zones regardless of the underlying photo,
            so copy stays legible even over light or busy imagery. Combined with the
            per-slide overlay above, this is what produces the smooth left-dark to
            right-visible reveal without a visible seam. */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.38) 40%, rgba(0,0,0,0.22) 55%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.02) 100%), linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 30%)',
          }}
          aria-hidden="true"
        ></div>

        <div className="relative z-20 max-w-[1280px] mx-auto px-6 w-full grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-6 relative">
            <AnimatePresence mode="wait">
              <motion.div key={slide.id} className="flex flex-col items-start space-y-7">

                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15] max-w-xl drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)]"
                >
                  {slide.titleLead}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-nforce-red via-red-400 to-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)]">{slide.titleHighlight}</span>{' '}
                  {slide.titleTail}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.08 }}
                  className="text-zinc-100 text-base sm:text-lg font-normal leading-relaxed max-w-xl drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.16 }}
                  className="pt-1 flex flex-col items-start gap-4"
                >
                  <button
                    onClick={() => { setCurrentTab(slide.primaryCta.tab); window.scrollTo(0, 0); }}
                    className="group relative px-8 py-4 bg-nforce-red hover:bg-nforce-red text-white font-bold text-xs uppercase tracking-widest rounded shadow-[0_10px_20px_rgba(175,16,26,0.3)] transition-all hover:-translate-y-1"
                  >
                    {slide.primaryCta.label}
                  </button>

                  <button
                    onClick={() => { setCurrentTab(slide.secondaryCta.tab); window.scrollTo(0, 0); }}
                    className="px-8 py-4 border-2 border-zinc-400 text-zinc-200 hover:bg-white hover:text-black font-bold text-xs uppercase tracking-widest rounded transition-all"
                  >
                    {slide.secondaryCta.label}
                  </button>
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider controls: prev/next + dot indicators, lifted off the viewport edge with
            its own breathing room below the CTA row. Shares the navbar/hero-content
            container so Previous/Next line up with the logo and heading edges. */}
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-0 right-0 z-20">
          <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
            <button
              onClick={() => goToSlide(activeSlide - 1)}
              aria-label="Previous slide"
              className="flex items-center gap-2 -ml-4 sm:-ml-5 px-4 sm:px-5 py-3 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
            >
              <span aria-hidden="true">&#8592;</span>
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex items-center gap-1">
              {heroSlides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="group p-2.5 flex items-center justify-center"
                >
                  <span className={`block h-1.5 rounded-full transition-all shadow-[0_1px_4px_rgba(0,0,0,0.9)] ${idx === activeSlide ? 'w-8 bg-nforce-red' : 'w-1.5 bg-white/70 group-hover:bg-white'}`}></span>
                </button>
              ))}
            </div>

            <button
              onClick={() => goToSlide(activeSlide + 1)}
              aria-label="Next slide"
              className="flex items-center gap-2 -mr-4 sm:-mr-5 px-4 sm:px-5 py-3 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
            >
              <span className="hidden sm:inline">Next</span>
              <span aria-hidden="true">&#8594;</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. METRIC BAR: Impact & Proven Enterprise Numbers from home.md */}
      <section className="bg-nforce-red py-12 text-white border-b border-red-800">
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
      <ParallaxFeatureSection
        eyebrow="WHAT WE DO"
        title="Transforming Software Quality & Digital Engineering"
        items={valuePillars}
      />

      {/* 4b. SCALE AT SPEED: brand promise banner, links through to About Us */}
      <ScaleAtSpeedSection onExplore={() => { setCurrentTab('about'); window.scrollTo(0, 0); }} />

      {/* 5. CORE SOLUTIONS: Asymmetric Bento Grid (from home.md) */}
      <section className="pt-10 pb-24 bg-white border-b border-neutral-200">
        <div className="max-w-[1280px] mx-auto px-6 space-y-12">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-bold text-nforce-red uppercase tracking-[0.2em]">HOW WE DO</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight mt-2">
                Core Solutions
              </h2>
            </div>
            <button
              onClick={() => { setCurrentTab('services'); window.scrollTo(0, 0); }}
              className="text-xs font-bold text-neutral-800 border-b-2 border-nforce-red pb-1 hover:text-nforce-red transition-colors uppercase tracking-wider flex items-center gap-1"
            >
              <span>VIEW ALL SOLUTIONS</span>
              <ChevronRight className="w-4 h-4 text-nforce-red" />
            </button>
          </div>

          <CoreSolutionsGrid
            items={homeCoreSolutions}
            onSelect={() => { setCurrentTab('services'); window.scrollTo(0, 0); }}
          />

        </div>
      </section>

      {/* 6. FEATURED CASE STUDY & CLIENT ROI: from home.md */}
      <CaseStudySection
        items={homeCaseStudies}
        onExplore={() => { setCurrentTab('industries'); window.scrollTo(0, 0); }}
      />

      {/* 7. INDUSTRIES WE SERVE: Powering Innovation Across Every Industry (from home.md) */}
      <section className="pt-12 pb-24 bg-white border-b border-neutral-200">
        <div className="max-w-[1280px] mx-auto px-6 space-y-12">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="text-xs font-bold text-nforce-red uppercase tracking-[0.2em]">INDUSTRIES WE SERVE</div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight mt-2">
                Powering Innovation Across Every Industry
              </h2>
              <p className="text-neutral-600 text-sm max-w-2xl mt-2">
                Our IT services empower organizations (startups, enterprises, and government bodies) to modernize infrastructure, enhance digital resilience, and scale innovation with confidence.
              </p>
            </div>
            <button
              onClick={() => { setCurrentTab('industries'); window.scrollTo(0, 0); }}
              className="text-xs font-bold text-neutral-800 border-b-2 border-nforce-red pb-1 hover:text-nforce-red transition-colors uppercase tracking-wider"
            >
              VIEW ALL INDUSTRIES
            </button>
          </div>

          <IndustryCardGrid items={featuredIndustries} onSelect={navigateToIndustry} />

        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <TestimonialsSection items={homeTestimonials} />

      {/* 9. PARTNER WITH US & HOW IT WORKS: from home.md */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-10 grid lg:grid-cols-12 gap-12 items-center shadow-2xl">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-nforce-red uppercase tracking-[0.2em]">CONTACT US</span>
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
                    <div className="w-6 h-6 rounded-full bg-nforce-red text-white font-bold text-xs flex items-center justify-center shrink-0">1</div>
                    <p className="text-xs text-zinc-300">We schedule a discovery call at your convenience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-nforce-red text-white font-bold text-xs flex items-center justify-center shrink-0">2</div>
                    <p className="text-xs text-zinc-300">We assess your goals, tech landscape, and business workflows</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-nforce-red text-white font-bold text-xs flex items-center justify-center shrink-0">3</div>
                    <p className="text-xs text-zinc-300">We deliver a tailored solution proposal and execution roadmap</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-zinc-400 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-nforce-red shrink-0" />
                  <span>admin@nforceone.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-nforce-red shrink-0" />
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

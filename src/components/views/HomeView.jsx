import React, { useState, useEffect } from 'react';
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
import CaseStudySection from '../common/CaseStudySection';
import CoreSolutionsGrid from '../common/CoreSolutionsGrid';
import ParallaxFeatureSection from '../common/ParallaxFeatureSection';
import ScaleAtSpeedSection from '../common/ScaleAtSpeedSection';

// Core Solutions from home.md
const homeCoreSolutions = [
  {
    id: 'quality-engineering',
    title: 'Quality Engineering',
    summary: 'Comprehensive manual, automated, functional, regression, mobile, API, and cloud testing to ensure software reliability and defect-free delivery.',
    icon: ShieldCheck,
    tag: 'QA & AUTOMATION',
    image: '/images/Quality_Engineering.png'
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
    image: '/images/databasemanagement.png'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    summary: 'Advanced data pipelines, business intelligence dashboards, and big data engineering for actionable insights.',
    icon: BarChart3,
    tag: 'ANALYTICS',
    image: '/images/DataAnalytics.png'
  }
];

// Featured Case Study & Client ROI from home.md
const homeCaseStudies = [
  {
    id: 'healthcare-telehealth',
    client: 'Leading Healthcare & Telehealth Provider',
    summary: 'Legacy manual testing bottlenecks were delaying bi-weekly feature rollouts and causing regression defects. NForceOne implemented automated CI/CD test pipelines using Playwright and containerized staging environments.',
    image: '/images/hero_command_center.jpg',
    stats: [
      { value: '68%', label: 'Faster Release Cycles' },
      { value: '0', label: 'P1 Production Defects Across 12 Sprints' }
    ]
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
    image: '/images/hero_ai_professional.png',
    primaryCta: { label: 'Schedule a Free Consultation', tab: 'contact' },
    secondaryCta: { label: 'Explore Services', tab: 'services' }
  },
  {
    id: 'quality-engineering',
    titleLead: 'Engineering',
    titleHighlight: 'Defect Free Software',
    titleTail: 'at Enterprise Scale',
    subtitle: 'Manual and automated QA, functional and regression testing, and custom web, mobile, and enterprise application development built to ship reliably, fast.',
    image: '/images/hero_quality_engineering.png',
    primaryCta: { label: 'Explore Quality Engineering', tab: 'services' },
    secondaryCta: { label: 'Schedule a Free Consultation', tab: 'contact' }
  },
  {
    id: 'ai-cloud-data',
    titleLead: 'Powering Innovation with',
    titleHighlight: 'AI, Cloud & Data',
    titleTail: 'Engineering',
    subtitle: 'Generative AI, LLM integration, DevOps automation, and secure cloud infrastructure across AWS, Azure, and GCP engineered to scale with your business.',
    image: '/images/hero_ai_cloud_data.png',
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
    image: '/images/Scalability.png'
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

export default function HomeView({ setCurrentTab, navigateToService, navigateToIndustry }) {
  const [activeIndustryTab, setActiveIndustryTab] = useState('fintech');
  const indData = industriesList.find(i => i.id === activeIndustryTab) || industriesList[0];

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

      {/* 1. HERO SECTION: image slider (3 slides) with overlay copy + prev/next controls */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-neutral-950 text-white border-b border-zinc-800 py-20 lg:py-28">

        {/* Slide backgrounds (crossfade, shown at full brightness) */}
        <div className="absolute inset-0">
          {heroSlides.map((s, idx) => (
            <div
              key={s.id}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${idx === activeSlide ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 35%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.15) 85%), url('${s.image}')`,
              }}
              aria-hidden="true"
            ></div>
          ))}
        </div>

        {/* Scrim: darkens the text/controls zones regardless of the underlying photo,
            so copy stays legible even over light or busy imagery. */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.05) 85%), linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 30%)',
          }}
          aria-hidden="true"
        ></div>

        <div className="relative z-20 max-w-[1600px] mx-auto px-6 lg:px-12 w-full grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-6 flex flex-col items-start space-y-6">

            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] max-w-xl drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)]">
              {slide.titleLead}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)]">{slide.titleHighlight}</span>{' '}
              {slide.titleTail}
            </h1>

            <p className="text-zinc-100 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
              {slide.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => { setCurrentTab(slide.primaryCta.tab); window.scrollTo(0, 0); }}
                className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded shadow-[0_10px_20px_rgba(175,16,26,0.3)] transition-all hover:-translate-y-1"
              >
                {slide.primaryCta.label}
              </button>

              <button
                onClick={() => { setCurrentTab(slide.secondaryCta.tab); window.scrollTo(0, 0); }}
                className="px-8 py-4 border-2 border-zinc-400 text-zinc-200 hover:bg-white hover:text-black font-bold text-xs uppercase tracking-widest rounded transition-all"
              >
                {slide.secondaryCta.label}
              </button>
            </div>

          </div>
        </div>

        {/* Slider controls: prev/next + dot indicators */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-10">
          <button
            onClick={() => goToSlide(activeSlide - 1)}
            aria-label="Previous slide"
            className="flex items-center gap-2 px-4 sm:px-5 py-4 text-xs font-bold uppercase tracking-widest text-zinc-100 hover:text-white transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
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
                className={`h-1.5 rounded-full transition-all shadow-[0_1px_4px_rgba(0,0,0,0.9)] ${idx === activeSlide ? 'w-8 bg-red-600' : 'w-1.5 bg-white/70 hover:bg-white'}`}
              ></button>
            ))}
          </div>

          <button
            onClick={() => goToSlide(activeSlide + 1)}
            aria-label="Next slide"
            className="flex items-center gap-2 px-4 sm:px-5 py-4 text-xs font-bold uppercase tracking-widest text-zinc-100 hover:text-white transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          >
            <span className="hidden sm:inline">Next</span>
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      </section>

      {/* 2. METRIC BAR: Impact & Proven Enterprise Numbers from home.md */}
      <section className="bg-red-700 py-12 text-white border-b border-red-800">
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
              <span className="text-xs font-bold text-red-600 uppercase tracking-[0.2em]">HOW WE DO</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight mt-2">
                Core Solutions
              </h2>
            </div>
            <button
              onClick={() => { setCurrentTab('services'); window.scrollTo(0, 0); }}
              className="text-xs font-bold text-neutral-800 border-b-2 border-red-600 pb-1 hover:text-red-600 transition-colors uppercase tracking-wider flex items-center gap-1"
            >
              <span>VIEW ALL SOLUTIONS</span>
              <ChevronRight className="w-4 h-4 text-red-600" />
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
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-[1280px] mx-auto px-6 space-y-12">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="text-xs font-bold text-red-600 uppercase tracking-[0.2em]">INDUSTRIES WE SERVE</div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight mt-2">
                Powering Innovation Across Every Industry
              </h2>
              <p className="text-neutral-600 text-sm max-w-2xl mt-2">
                Our IT services empower organizations (startups, enterprises, and government bodies) to modernize infrastructure, enhance digital resilience, and scale innovation with confidence.
              </p>
            </div>
            <button
              onClick={() => { setCurrentTab('industries'); window.scrollTo(0, 0); }}
              className="text-xs font-bold text-neutral-800 border-b-2 border-red-600 pb-1 hover:text-red-600 transition-colors uppercase tracking-wider"
            >
              VIEW ALL INDUSTRIES
            </button>
          </div>

          <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-4">
            {industriesList.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryTab(ind.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeIndustryTab === ind.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:text-red-600 border border-neutral-200 hover:bg-neutral-100'
                  }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Industry Highlight</span>
              <h3 className="text-2xl font-bold text-neutral-900">{indData.name}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{indData.summary}</p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {(indData.solutions || []).map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigateToIndustry(indData)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded flex items-center gap-2 transition-colors shadow-md"
                >
                  <span>Explore {indData.name} Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="md:col-span-5 rounded-xl overflow-hidden border border-neutral-200 shadow-md">
              <img
                src={indData.image}
                alt={indData.name}
                className="w-full h-72 object-cover"
              />
            </div>
          </div>

        </div>
      </section>

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

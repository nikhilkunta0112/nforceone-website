import React from 'react';
import { servicesList, allSubservicesList } from '../../data/servicesData';
import FlipCard from './FlipCard';

const qaFeatures = ['Manual Testing', 'Automation Testing', 'AI Testing', 'Consulting & Outsourcing'];

const primaryServices = [
  {
    id: 'qa',
    eyebrow: 'FULL-CYCLE QA',
    title: 'Quality Assurance',
    image: '/images/indian_software_testing.jpg',
    summary: 'We deliver comprehensive testing and QA services that ensure software reliability, performance, and security, helping businesses achieve flawless user experiences and faster time-to-market.'
  },
  {
    id: 'software-development',
    eyebrow: 'ENGINEERING',
    title: 'Software Development',
    image: '/images/indian_dev.jpg',
    summary: 'We build custom software solutions tailored to your business needs, delivering scalable, secure, and high-performing applications that drive growth and innovation.'
  },
  {
    id: 'artificial-intelligence',
    eyebrow: 'EMERGING TECH',
    title: 'Artificial Intelligence',
    image: '/images/service_ai.jpg',
    summary: 'We design and deploy AI-powered solutions that automate processes, unlock data-driven insights, and enhance decision-making across industries.'
  },
  {
    id: 'pega-development',
    eyebrow: 'ENTERPRISE BPM',
    title: 'Pega Development',
    image: '/images/indian_pega_dev.jpg',
    summary: 'Our PEGA-certified experts design, build, and optimize enterprise-grade BPM and CRM solutions, streamlining workflows and driving operational efficiency with intelligent automation.'
  },
  {
    id: 'pega-testing',
    eyebrow: 'ENTERPRISE QA',
    title: 'Pega Testing',
    image: '/images/indian_pega_qa.jpg',
    summary: 'We ensure flawless PEGA applications with end-to-end functional, regression, and performance testing, delivering reliable, high-quality solutions that align with business goals.'
  },
  {
    id: 'devops',
    eyebrow: 'INFRASTRUCTURE',
    title: 'Devops',
    image: '/images/indian_devops.jpg',
    summary: 'We help businesses adopt modern DevOps practices, transforming software delivery into a fast, repeatable, and reliable process.'
  },
  {
    id: 'database-management',
    eyebrow: 'DATA ARCHITECTURE',
    title: 'Database Management',
    image: '/images/indian_db.jpg',
    summary: 'With years of experience across SQL and NoSQL ecosystems, our database experts design, implement, and maintain high-performing, scalable, and secure database environments for businesses of all sizes.'
  },
  {
    id: 'data-analytics',
    eyebrow: 'ANALYTICS',
    title: 'Data Analytics',
    image: '/images/indian_analytics.jpg',
    summary: 'Smarter decisions start with clearer data. Our advanced analytics frameworks transform information into action, empowering every level of your organization — from rapid dashboards to predictive modeling pipelines.'
  },
  {
    id: 'big-data',
    eyebrow: 'BIG DATA',
    title: 'Big Data',
    image: '/images/indian_big_data.jpg',
    summary: 'We architect and manage robust big data ecosystems that capture, process, and analyze massive datasets, empowering businesses with actionable insights and smarter decision-making.'
  },
  {
    id: 'digital-app-development',
    eyebrow: 'MOBILE & WEB',
    title: 'Digital App Development',
    image: '/images/indian_digital_app.jpg',
    summary: 'We design and develop intuitive, high-performing web and mobile applications that deliver seamless user experiences and accelerate digital transformation for businesses of all sizes.'
  },
  {
    id: 'intelligent-rpa',
    eyebrow: 'RPA AUTOMATION',
    title: 'Intelligent RPA',
    image: '/images/indian_rpa.jpg',
    summary: 'We implement AI-powered robotic process automation that streamlines repetitive tasks, boosts accuracy, and enhances productivity across your enterprise operations.'
  },
  {
    id: 'management-services',
    eyebrow: 'IT GOVERNANCE',
    title: 'Management Services',
    image: '/images/indian_tech_team.jpg',
    summary: 'We provide end-to-end IT management, ensuring secure, reliable, and optimized operations that enable businesses to focus on growth while we handle the complexity.'
  }
];

export default function ServicesTileGrid({ navigateToService, setCurrentTab }) {
  const handleCardClick = (id) => {
    // Quality Assurance maps to servicesList, the rest map to allSubservicesList
    if (id === 'qa') {
      const qaData = servicesList.find((s) => s.id === 'qa');
      if (qaData) navigateToService(qaData);
    } else {
      const subData = allSubservicesList.find((s) => s.id === id);
      if (subData) navigateToService(subData);
    }
  };

  const featuresFor = (id) =>
    id === 'qa' ? qaFeatures : allSubservicesList.find((s) => s.id === id)?.features ?? [];

  return (
    <section className="py-24 bg-[#D5C29D] text-neutral-900 border-b border-black/[0.04] relative overflow-hidden select-none">
      {/* Background blueprint grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold text-red-700 uppercase tracking-[0.25em]">SERVICES WE OFFER</span>
            <h2 className="text-3xl lg:text-4xl font-black text-neutral-950 tracking-tight leading-none">
              Transforming Software Quality & Digital Engineering
            </h2>
            <p className="text-neutral-755 text-sm max-w-2xl leading-relaxed">
              NForceOne is a global software services firm delivering next-gen Quality Assurance, custom software development, DevOps, and Pega solutions. Scale at Speed.
            </p>
          </div>
          <button 
            onClick={() => { setCurrentTab('services'); window.scrollTo(0, 0); }}
            className="text-xs font-bold text-neutral-900 border-b-2 border-red-700 pb-1 hover:text-red-800 hover:border-red-800 transition-colors uppercase tracking-widest shrink-0"
          >
            VIEW ALL SERVICES
          </button>
        </div>

        {/* 3x4 Accenture Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {primaryServices.map((card) => (
            <FlipCard
              key={card.id}
              eyebrow={card.eyebrow}
              title={card.title}
              image={card.image}
              description={card.summary}
              features={featuresFor(card.id)}
              onSelect={() => handleCardClick(card.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


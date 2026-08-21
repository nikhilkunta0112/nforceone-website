import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  Menu, 
  X, 
  Building2,
  ShieldCheck,
  Code,
  Bot,
  Workflow,
  CheckCircle2,
  Terminal,
  Database,
  BarChart3,
  Server,
  Smartphone,
  Cpu,
  Briefcase,
  Globe,
  Sparkles,
  Layout,
  Gauge,
  Wrench,
  Activity,
  GitBranch,
  Layers,
  CreditCard,
  Lock,
  Radio,
  Cloud
} from 'lucide-react';
import { allSubservicesList } from '../../data/servicesData';
import { industriesList } from '../../data/industriesData';

// Map of icons for each service item
const iconMap = {
  "quality-assurance": ShieldCheck,
  "manual-testing": CheckCircle2,
  "automation-testing": Workflow,
  "consulting-testing": Briefcase,
  "outsourcing-testing": Globe,
  "ai-testing": Sparkles,
  "ux-testing": Layout,
  "performance-testing": Gauge,
  "functional-testing": Wrench,
  "regression-testing": Activity,
  "integration-testing": GitBranch,
  "compatibility-testing": Layers,
  "pos-testing": CreditCard,
  "payment-testing": Lock,
  "iot-testing": Radio,
  "mobile-app-testing": Smartphone,
  "mobile-and-device-testing": Smartphone,
  "web-app-testing": Globe,
  "cloud-testing": Cloud,
  "software-development": Code,
  "artificial-intelligence": Bot,
  "pega-development": Workflow,
  "pega-testing": CheckCircle2,
  "devops": Terminal,
  "database-management": Database,
  "data-analytics": BarChart3,
  "big-data": Server,
  "digital-app-development": Smartphone,
  "intelligent-rpa": Cpu,
  "management-services": Briefcase
};

// Exact Services Menu structure from live nforceone.com
const navbarServicesStructure = [
  {
    name: "Quality Assurance –",
    id: "quality-assurance",
    hasSubmenu: true,
    subCategories: [
      {
        title: "Full Cycle Services –",
        items: [
          { name: "Manual Testing", id: "manual-testing" },
          { name: "Automation Testing", id: "automation-testing" },
          { name: "Consulting Testing", id: "consulting-testing" },
          { name: "Outsourcing Testing", id: "outsourcing-testing" },
          { name: "AI Testing", id: "ai-testing" }
        ]
      },
      {
        title: "Services By Type –",
        items: [
          { name: "UX Testing", id: "ux-testing" },
          { name: "Performance Testing", id: "performance-testing" },
          { name: "Functional Testing", id: "functional-testing" },
          { name: "Regression Testing", id: "regression-testing" },
          { name: "Integration Testing", id: "integration-testing" },
          { name: "Compatibility Testing", id: "compatibility-testing" }
        ]
      },
      {
        title: "Services By Platform –",
        items: [
          { name: "POS Testing", id: "pos-testing" },
          { name: "Payment Testing", id: "payment-testing" },
          { name: "IoT Testing", id: "iot-testing" },
          { name: "Mobile App Testing", id: "mobile-app-testing" },
          { name: "Mobile & Device Testing", id: "mobile-and-device-testing" },
          { name: "Web App Testing", id: "web-app-testing" },
          { name: "Cloud Testing", id: "cloud-testing" }
        ]
      }
    ]
  },
  { name: "Software Development", id: "software-development", hasSubmenu: false },
  { name: "Artificial Intelligence", id: "artificial-intelligence", hasSubmenu: false },
  { name: "Pega Development", id: "pega-development", hasSubmenu: false },
  { name: "Pega Testing", id: "pega-testing", hasSubmenu: false },
  { name: "Devops", id: "devops", hasSubmenu: false },
  { name: "Database Management", id: "database-management", hasSubmenu: false },
  { name: "Data Analytics", id: "data-analytics", hasSubmenu: false },
  { name: "Big Data", id: "big-data", hasSubmenu: false },
  { name: "Digital App Development", id: "digital-app-development", hasSubmenu: false },
  { name: "Intelligent RPA", id: "intelligent-rpa", hasSubmenu: false },
  { name: "Management Services", id: "management-services", hasSubmenu: false }
];

export default function Navbar({ 
  currentTab, 
  setCurrentTab, 
  navigateToService, 
  navigateToIndustry,
  mobileMenuOpen, 
  setMobileMenuOpen 
}) {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileQaSubOpen, setMobileQaSubOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const handleNavClick = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSelectServiceItem = (item) => {
    const found = allSubservicesList.find(s => s.id === item.id || s.name.toLowerCase() === item.name.toLowerCase()) || {
      id: item.id || item.name.toLowerCase().replace(/\s+/g, '-'),
      title: item.name,
      category: 'Services',
      summary: `${item.name} services engineered to scale at speed with enterprise reliability and defect-free standards.`,
      image: '/images/qa_dashboard.jpg',
      features: ['Full-cycle domain QA execution', 'CI/CD pipeline automation', 'ISO 27001 compliant security', '24/7 telemetry monitoring'],
      subservices: [item.name, 'CI/CD Automation', 'Security Hardening']
    };

    navigateToService(found);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral-950 text-white border-b border-zinc-800 shadow-lg">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="cursor-pointer flex items-center"
        >
          <img 
            src="/images/nforceone_logo_transparent.png" 
            alt="NForceOne - Let's Do IT!" 
            className="h-12 sm:h-14 w-auto object-contain" 
          />
        </div>

        {/* Desktop Nav Links: Home | About Us | Services ▾ | Industries ▾ | Careers | Contact Us */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* 1. Home */}
          <button 
            onClick={() => handleNavClick('home')}
            className={`text-xs font-bold tracking-widest uppercase transition-colors ${currentTab === 'home' ? 'text-red-500 border-b-2 border-red-500 py-1' : 'text-zinc-300 hover:text-red-400'}`}
          >
            Home
          </button>

          {/* 2. About Us */}
          <button 
            onClick={() => handleNavClick('about')}
            className={`text-xs font-bold tracking-widest uppercase transition-colors ${currentTab === 'about' ? 'text-red-500 border-b-2 border-red-500 py-1' : 'text-zinc-300 hover:text-red-400'}`}
          >
            About Us
          </button>

          {/* 3. Services Dropdown */}
          <div className="relative group">
            <button 
              onClick={() => handleNavClick('services')}
              className={`text-xs font-bold tracking-widest uppercase flex items-center gap-1 py-6 transition-colors ${currentTab.startsWith('service') ? 'text-red-500 border-b-2 border-red-500' : 'text-zinc-300 hover:text-red-400'}`}
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-red-400 transition-transform group-hover:rotate-180" />
            </button>
            
            {/* Primary Dropdown Menu */}
            <div className="absolute top-full left-0 w-72 bg-zinc-900 border border-zinc-800 shadow-2xl rounded-xl py-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
              
              {navbarServicesStructure.map((item, idx) => {
                const ItemIcon = iconMap[item.id] || Cpu;

                if (item.hasSubmenu) {
                  return (
                    <div key={idx} className="relative group/qa">
                      <button
                        onClick={() => handleNavClick('services')}
                        className="w-full text-left px-4 py-2.5 text-xs font-bold text-zinc-200 hover:bg-zinc-800 hover:text-red-400 flex items-center justify-between transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-md bg-red-600/10 text-red-500 border border-red-500/20 flex items-center justify-center shrink-0">
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <span>{item.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-zinc-400 group-hover/qa:text-red-400" />
                      </button>

                      {/* Nested Flyout Submenu for Quality Assurance */}
                      <div className="absolute top-0 left-full ml-1 w-[540px] bg-zinc-900 border border-zinc-800 shadow-2xl rounded-xl p-5 opacity-0 group-hover/qa:opacity-100 pointer-events-none group-hover/qa:pointer-events-auto transition-all duration-200 z-50">
                        <div className="grid grid-cols-3 gap-5">
                          {item.subCategories.map((subCat, sIdx) => (
                            <div key={sIdx} className="space-y-2.5">
                              <div className="text-[11px] font-bold text-red-500 border-b border-zinc-800 pb-1.5 uppercase tracking-wider">
                                {subCat.title}
                              </div>
                              <div className="space-y-1">
                                {subCat.items.map((subItem, iIdx) => {
                                  const SubIcon = iconMap[subItem.id] || CheckCircle2;
                                  return (
                                    <button
                                      key={iIdx}
                                      onClick={() => handleSelectServiceItem(subItem)}
                                      className="w-full text-left text-xs font-medium text-zinc-300 hover:text-red-400 hover:bg-zinc-800 py-1.5 px-2 rounded-md transition-colors flex items-center gap-2 group/sub"
                                    >
                                      <SubIcon className="w-3.5 h-3.5 text-red-500 shrink-0 group-hover/sub:scale-110 transition-transform" />
                                      <span className="line-clamp-1">{subItem.name}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectServiceItem(item)}
                    className="w-full text-left px-4 py-2.5 text-xs font-bold text-zinc-200 hover:bg-zinc-800 hover:text-red-400 transition-colors flex items-center gap-3 group/single"
                  >
                    <div className="w-7 h-7 rounded-md bg-zinc-800 group-hover/single:bg-red-600/10 text-zinc-400 group-hover/single:text-red-500 flex items-center justify-center shrink-0 transition-colors">
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <span>{item.name}</span>
                  </button>
                );
              })}

            </div>
          </div>

          {/* 4. Industries Dropdown */}
          <div className="relative group">
            <button 
              onClick={() => handleNavClick('industries')}
              className={`text-xs font-bold tracking-widest uppercase flex items-center gap-1 py-6 transition-colors ${currentTab.startsWith('industry') ? 'text-red-500 border-b-2 border-red-500' : 'text-zinc-300 hover:text-red-400'}`}
            >
              <span>Industries</span>
              <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-red-400 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-0 w-80 bg-zinc-900 border border-zinc-800 shadow-xl rounded-xl p-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3 px-3">Industry Solutions</div>
              {industriesList.map(ind => (
                <button 
                  key={ind.id}
                  onClick={() => navigateToIndustry(ind)}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-3 group/item"
                >
                  <Building2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="text-xs font-bold text-zinc-200 group-hover/item:text-red-400 transition-colors">{ind.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 5. Careers */}
          <button 
            onClick={() => handleNavClick('careers')}
            className={`text-xs font-bold tracking-widest uppercase transition-colors ${currentTab === 'careers' ? 'text-red-500 border-b-2 border-red-500 py-1' : 'text-zinc-300 hover:text-red-400'}`}
          >
            Careers
          </button>

          {/* 6. Contact Us */}
          <button 
            onClick={() => handleNavClick('contact')}
            className={`text-xs font-bold tracking-widest uppercase transition-colors ${currentTab === 'contact' ? 'text-red-500 border-b-2 border-red-500 py-1' : 'text-zinc-300 hover:text-red-400'}`}
          >
            Contact Us
          </button>
        </nav>

        {/* Header Red CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => handleNavClick('contact')}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded btn-hover shadow-lg shadow-red-600/30 flex items-center gap-2"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden p-2.5 rounded-lg text-white hover:bg-zinc-900"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-neutral-950 text-white pt-24 px-6 overflow-y-auto">
          <div className="flex flex-col gap-4 text-base font-bold text-white pb-12">
            <button onClick={() => handleNavClick('home')} className="text-left py-2 border-b border-zinc-800 hover:text-red-500">Home</button>
            <button onClick={() => handleNavClick('about')} className="text-left py-2 border-b border-zinc-800 hover:text-red-500">About Us</button>

            {/* Mobile Services Accordion */}
            <div>
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2 border-b border-zinc-800 hover:text-red-500 text-left"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-red-500' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pt-2 space-y-2 text-xs font-normal bg-zinc-900 p-3 rounded-lg mt-2 border border-zinc-800">
                  {/* QA Item */}
                  <div className="border-b border-zinc-800 pb-2">
                    <button
                      onClick={() => setMobileQaSubOpen(!mobileQaSubOpen)}
                      className="w-full flex items-center justify-between font-bold text-white hover:text-red-500 py-1"
                    >
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-red-500" />
                        <span>Quality Assurance –</span>
                      </div>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileQaSubOpen ? 'rotate-180 text-red-500' : ''}`} />
                    </button>

                    {mobileQaSubOpen && (
                      <div className="pl-3 pt-2 space-y-3">
                        {navbarServicesStructure[0].subCategories.map((subCat, sIdx) => (
                          <div key={sIdx} className="space-y-1">
                            <div className="font-bold text-[11px] text-red-500 uppercase">{subCat.title}</div>
                            <div className="grid grid-cols-1 gap-1 pl-2">
                              {subCat.items.map((subItem, iIdx) => {
                                const SubIcon = iconMap[subItem.id] || CheckCircle2;
                                return (
                                  <button
                                    key={iIdx}
                                    onClick={() => handleSelectServiceItem(subItem)}
                                    className="text-left py-2 text-zinc-300 hover:text-red-400 text-xs flex items-center gap-2"
                                  >
                                    <SubIcon className="w-3.5 h-3.5 text-red-500 shrink-0" />
                                    <span>{subItem.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Standard services */}
                  {navbarServicesStructure.slice(1).map((srv, sIdx) => {
                    const ItemIcon = iconMap[srv.id] || Cpu;
                    return (
                      <button
                        key={sIdx}
                        onClick={() => handleSelectServiceItem(srv)}
                        className="text-left py-2 text-zinc-300 font-medium hover:text-red-400 flex items-center gap-2.5 w-full"
                      >
                        <ItemIcon className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{srv.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Industries Accordion */}
            <div>
              <button 
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full flex items-center justify-between py-2 border-b border-zinc-800 hover:text-red-500 text-left"
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? 'rotate-180 text-red-500' : ''}`} />
              </button>

              {mobileIndustriesOpen && (
                <div className="pl-4 pt-2 space-y-2 text-xs font-normal bg-zinc-900 p-3 rounded-lg mt-2 border border-zinc-800">
                  {industriesList.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => { navigateToIndustry(ind); setMobileMenuOpen(false); }}
                      className="text-left py-2 text-zinc-300 hover:text-red-400 flex items-center gap-2 text-xs"
                    >
                      <Building2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{ind.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick('careers')} className="text-left py-2 border-b border-zinc-800 hover:text-red-500">Careers</button>
            <button onClick={() => handleNavClick('contact')} className="text-left py-2 border-b border-zinc-800 hover:text-red-500">Contact Us</button>

            <button onClick={() => handleNavClick('contact')} className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded text-center font-bold uppercase tracking-widest text-xs shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

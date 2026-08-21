import { motion, useReducedMotion } from 'framer-motion';
import { Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import { contactData } from '../../data/contactData';

function AnimatedContainer({ className, delay = 0.1, children }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Footer({ setCurrentTab }) {
  const handleNav = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      label: 'Core Services',
      links: [
        { title: 'Quality Assurance', tab: 'services' },
        { title: 'Test Automation', tab: 'services' },
        { title: 'Software Development', tab: 'services' },
        { title: 'Pega Development & QA', tab: 'services' },
        { title: 'Cloud & DevOps', tab: 'services' },
        { title: 'AI & Intelligent RPA', tab: 'services' },
      ],
    },
    {
      label: 'Company',
      links: [
        { title: 'About NForceOne', tab: 'about' },
        { title: 'Quality Standards', tab: 'about' },
        { title: 'Careers', tab: 'careers' },
        { title: 'FAQ', tab: 'careers' },
        { title: 'Contact & Support', tab: 'contact' },
      ],
    },
  ];

  return (
    <footer className="relative w-full bg-black bg-[url('/images/footer_bg.png')] bg-cover bg-center bg-no-repeat text-neutral-400 border-t border-neutral-800 text-xs overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 flex flex-wrap justify-between gap-x-10 gap-y-10">
        <AnimatedContainer className="w-full lg:w-auto lg:max-w-xs space-y-4">
          <div className="flex items-center">
            <img
              src="/images/nforceone_logo_transparent.png"
              alt="NForceOne - Let's Do IT!"
              className="h-14 sm:h-16 w-auto object-contain rounded-md"
            />
          </div>
          <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
            NForceOne is a global software services firm delivering next-gen Quality Assurance, custom software development, DevOps, and Pega solutions. Scale at Speed.
          </p>
          <div className="flex items-center gap-1 -ml-2">
            <a
              href="https://www.linkedin.com/company/nforceone"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NForceOne on LinkedIn"
              className="p-2.5 text-neutral-500 hover:text-red-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/nforce_one/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NForceOne on Instagram"
              className="p-2.5 text-neutral-500 hover:text-red-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/NForceOneonX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NForceOne on X"
              className="p-2.5 text-neutral-500 hover:text-red-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@socialmedia_NforceOne"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NForceOne on YouTube"
              className="p-2.5 text-neutral-500 hover:text-red-400 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </AnimatedContainer>

        {footerSections.map((section, index) => (
          <AnimatedContainer key={section.label} className="w-[45%] sm:w-auto" delay={0.1 + index * 0.1}>
            <div className="font-bold text-white uppercase tracking-wider mb-3">{section.label}</div>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.title}>
                  <button
                    onClick={() => handleNav(link.tab)}
                    className="hover:text-red-400 transition-colors"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </AnimatedContainer>
        ))}

        <AnimatedContainer className="w-full sm:w-auto" delay={0.4}>
          <div className="font-bold text-white uppercase tracking-wider mb-3">Contact Details</div>
          <ul className="space-y-4">
            {contactData.offices.map((office) => (
              <li key={office.city} className="space-y-1">
                <div className="text-neutral-300 font-semibold">{office.city}, {office.country}</div>
                <a href={`mailto:${office.email}`} className="block hover:text-red-400 transition-colors">
                  {office.email}
                </a>
                <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="block hover:text-red-400 transition-colors">
                  {office.phone}
                </a>
              </li>
            ))}
          </ul>
        </AnimatedContainer>
      </div>

      <div className="bg-neutral-900 py-4 border-t border-neutral-800 text-center text-neutral-500 text-xs">
        &copy; {new Date().getFullYear()} NForceOne. All Rights Reserved. Scale at Speed.
      </div>
    </footer>
  );
}

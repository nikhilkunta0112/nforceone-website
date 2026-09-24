import { ArrowUpRight, Mail, MapPin, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import { contactData } from '../../data/contactData';
import './footer.css';

const coreServiceLinks = [
  { title: 'Quality Assurance', tab: 'services' },
  { title: 'Test Automation', tab: 'services' },
  { title: 'Software Development', tab: 'services' },
  { title: 'Pega Development & QA', tab: 'services' },
  { title: 'Cloud & DevOps', tab: 'services' },
  { title: 'AI & Intelligent RPA', tab: 'services' },
];

const companyLinks = [
  { title: 'About NForceOne', tab: 'about' },
  { title: 'Industries', tab: 'industries' },
  { title: 'Careers', tab: 'careers' },
  { title: 'Contact & Support', tab: 'contact' },
];

export default function Footer({ setCurrentTab }) {
  const handleNav = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactEmail = contactData.offices?.[0]?.email ?? 'admin@nforceone.com';

  return (
    <footer className="solace-footer">
      <div className="site-footer-wordmark-stage" aria-hidden="true">
        <span className="site-footer-wordmark">NForceOne</span>
      </div>

      <div className="site-footer-panel">
        <div className="site-footer-inner">
          <div className="site-footer-brand">
            <div>
              <a href="/" className="site-footer-logo-link" aria-label="NForceOne home" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>
                <img
                  src="/images/nforceone_logo_transparent.png"
                  alt="NForceOne"
                  className="site-footer-logo"
                  width="72"
                  height="52"
                />
              </a>
              <h2 className="site-footer-tagline">
                Engineering Release Confidence.
                <br />
                <span className="site-footer-subtagline">Built to Scale at Speed.</span>
              </h2>
            </div>

            <div className="site-footer-signoff">
              <div className="site-footer-actions">
                <a href={`mailto:${contactEmail}`} aria-label={`Email us at ${contactEmail}`}>
                  <Mail size={17} />
                  <span>Email us</span>
                </a>
                <button onClick={() => handleNav('contact')}>
                  <ArrowUpRight size={17} />
                  <span>Talk to an Expert</span>
                </button>
              </div>

              <div className="site-footer-social">
                <a href="https://www.linkedin.com/company/nforceone" target="_blank" rel="noopener noreferrer" aria-label="NForceOne on LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="https://www.instagram.com/nforce_one/" target="_blank" rel="noopener noreferrer" aria-label="NForceOne on Instagram">
                  <Instagram size={16} />
                </a>
                <a href="https://x.com/NForceOneonX" target="_blank" rel="noopener noreferrer" aria-label="NForceOne on X">
                  <Twitter size={16} />
                </a>
                <a href="https://www.youtube.com/@socialmedia_NforceOne" target="_blank" rel="noopener noreferrer" aria-label="NForceOne on YouTube">
                  <Youtube size={16} />
                </a>
              </div>

              <p>&copy; {new Date().getFullYear()} NForceOne. All rights reserved.</p>
            </div>
          </div>

          <nav className="site-footer-nav" aria-label="Footer navigation">
            <div className="site-footer-column">
              <h3>Services</h3>
              <ul>
                {coreServiceLinks.map(({ title, tab }) => (
                  <li key={title}>
                    <button onClick={() => handleNav(tab)}>{title}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer-column">
              <h3>Company</h3>
              <ul>
                {companyLinks.map(({ title, tab }) => (
                  <li key={title}>
                    <button onClick={() => handleNav(tab)}>{title}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer-column site-footer-connect">
              <h3>Connect</h3>
              <ul>
                <li>
                  <button onClick={() => handleNav('contact')}>Start a conversation</button>
                </li>
                <li>
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </li>
                {contactData.offices.map((office) => (
                  <li key={office.city}>
                    <span><MapPin size={13} /> {office.city}, {office.country}</span>
                  </li>
                ))}
                <li>
                  <span>US + India. One team.</span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}

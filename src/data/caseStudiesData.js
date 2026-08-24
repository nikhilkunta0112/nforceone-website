// Featured Case Study & Client ROI from home.md
export const caseStudiesList = [
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

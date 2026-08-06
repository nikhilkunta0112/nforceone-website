// Content sourced from content/Pages/industries__*.md (live site crawl)

export const industriesList = [
  {
    id: 'fintech',
    name: 'Banking, Finance & FinTech',
    image: '/images/fintech_banking.jpg',
    tagline: 'Empowering Secure, Scalable, and Intelligent Financial Services',
    summary: 'In today’s digital-first economy, the banking and financial services sector must deliver seamless customer experiences, ensure robust security, and adapt to evolving regulations. NForceOne supports banks, fintechs, and financial institutions with intelligent, compliant, and scalable technology solutions.',
    compliance: ['PCI-DSS & SOC2 Compliant Architecture', 'Automated AML & KYC Workflows', 'Open Banking API Governance & Security', 'GDPR & Regulatory Reporting Automation'],
    solutions: ['Core Banking Modernization', 'Fraud Detection and Risk Analytics', 'Customer 360 and Personalization Engines', 'Regulatory Compliance and Reporting Automation']
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Telemedicine',
    image: '/images/hero_command_center.jpg',
    tagline: 'HIPAA-Compliant Patient Care & Digital Health Infrastructure',
    summary: 'HIPAA-compliant software development, medical IoT testing, EHR integration, and telehealth app engineering for modern healthcare providers.',
    compliance: ['HIPAA Compliance', 'HL7 & FHIR Standards', 'FDA Software Validation', 'Cybersecurity Hardening'],
    solutions: ['Telemedicine App Testing', 'EHR System Integrations', 'Medical Device & IoT QA', 'Patient Data Encryption']
  },
  {
    id: 'isv',
    name: 'ISV & SaaS Software Vendors',
    image: '/images/qa_dashboard.jpg',
    tagline: 'Enabling Product-First Companies to Scale with Confidence',
    summary: 'ISVs today face immense pressure to ship fast, maintain quality, and meet evolving customer needs across platforms. NForceOne acts as an engineering accelerator, helping software vendors build scalable, secure, and high-performing applications through modern DevOps, testing, and AI integrations.',
    compliance: ['Multi-Tenant Data Isolation', 'CI/CD-Integrated QA Governance', 'API Authentication & Rate-Limiting Standards', 'Third-Party Integration Security (Stripe, Salesforce, Twilio)'],
    solutions: ['Cloud-Native Application Development', 'Automated QA and Regression Testing', 'Multi-Tenant SaaS Enablement', 'API Management and Third-Party Integrations']
  },
  {
    id: 'retail',
    name: 'Retail & eCommerce',
    image: '/images/fintech_banking.jpg',
    tagline: 'Delivering Frictionless Commerce',
    summary: 'From click to doorstep, retail success depends on seamless operations and hyper-personalized experiences. NForceOne supports omni-channel retailers and digital-first brands with scalable, secure, and intelligent solutions that drive conversions and loyalty.',
    compliance: ['Real-Time Inventory & Supply Chain Visibility Standards', 'Headless Commerce API Governance', 'Customer Data Platform (CDP) Privacy Compliance', 'Omnichannel Loyalty Data Security'],
    solutions: ['Intelligent Inventory & Supply Chain Management', 'Headless Commerce and API-first Platforms', 'Personalized Product Recommendations', 'Unified Customer Data & Loyalty Systems']
  },
  {
    id: 'telecom',
    name: 'Telecommunications',
    image: '/images/cloud_devops.jpg',
    tagline: 'Empowering Connectivity, Innovation, and Customer Experience',
    summary: 'The telecommunications industry is undergoing a seismic transformation fueled by 5G, AI, and automation. NForceOne helps telecom providers modernize their infrastructure, automate customer service, and derive intelligence from vast network data, enhancing service reliability, reducing churn, and driving customer satisfaction at scale.',
    compliance: ['5G & Edge Computing Orchestration Standards', 'BSS/OSS Digital Transformation & Migration', 'High-Throughput Billing & Subscriber Data QA', 'Telemetry & Predictive Network Analytics Governance'],
    solutions: ['AI-Powered Virtual Agents and IVR Systems', 'Predictive Network Maintenance', '5G and Edge Infrastructure Modernization', 'Real-Time Subscriber Analytics and Churn Reduction']
  },
  {
    id: 'automotive',
    name: 'Automotive & Connected Mobility',
    image: '/images/pega_automation.jpg',
    tagline: 'Driving Innovation Across the Automotive Value Chain',
    summary: 'As the automotive industry transitions toward connected, autonomous, shared, and electric (CASE) vehicles, digital transformation is essential. NForceOne enables automotive OEMs, suppliers, and mobility providers to embrace smart manufacturing, improve vehicle intelligence, and deliver exceptional customer experiences through next-gen technologies.',
    compliance: ['NIST & CMMC Compliant Cybersecurity Stack', 'IoT Telematics Data Governance', 'Over-the-Air (OTA) Update Security', 'Industry 4.0 Manufacturing Standards'],
    solutions: ['Connected Vehicle Platforms and Telematics', 'AI-Driven Predictive Maintenance', 'Digital Twin and Smart Manufacturing', 'Customer Experience Personalization']
  },
  {
    id: 'finance-fintech',
    name: 'Finance & FinTech',
    image: '/images/fintech_banking.jpg',
    tagline: 'Modernizing Financial Operations',
    summary: 'In a hyper-regulated, data-driven landscape, financial institutions require resilient, scalable, and secure systems. NForceOne helps financial firms, from legacy banks to digital-first startups, navigate compliance, scale digital infrastructure, and transform customer experiences through trusted technology solutions.',
    compliance: ['AML/CTF Regulatory Compliance', 'KYC Automation Standards', 'OCR & Secure API Identity Verification', 'Data-Driven Fraud Prevention Governance'],
    solutions: ['Core Banking System Modernization', 'Digital Lending & KYC Automation', 'Real-Time Fraud Detection & Risk Analytics', 'Personalized Wealth Management Platforms']
  },
  {
    id: 'digital-media',
    name: 'Digital Media & Advertising',
    image: '/images/hero_command_center.jpg',
    tagline: 'Unlocking Engagement, Reach, and ROI with Scalable AdTech',
    summary: 'The digital media and advertising landscape demands personalization at scale, real-time optimization, and cross-platform performance. NForceOne delivers the infrastructure, intelligence, and integrations required to power impactful digital campaigns and audience-first content strategies.',
    compliance: ['Real-Time Bidding (RTB) Standards', 'Data Privacy & Audience Consent Management', 'CDN & Cross-Device Delivery SLA', 'Attribution & Campaign Data Governance'],
    solutions: ['AdTech Infrastructure and Data Pipelines', 'Audience Segmentation and Targeting', 'Cross-Platform Content Delivery', 'Real-Time Campaign Analytics and Attribution']
  },
  {
    id: 'education',
    name: 'Education & EduTech',
    image: '/images/qa_dashboard.jpg',
    tagline: 'Transforming Learning Through Intelligent Technology',
    summary: 'As education rapidly shifts toward digital, institutions and EduTech providers must offer scalable, secure, and engaging platforms. NForceOne supports this transformation with cutting-edge IT services designed to enhance learner outcomes and administrative efficiency.',
    compliance: ['FERPA Compliance', 'COPPA Data Protection', 'Identity & Access Management for Multi-Tenant LMS', 'Secure Cloud Infrastructure for EduTech'],
    solutions: ['Virtual Classrooms and LMS Platforms', 'Student Data and Performance Analytics', 'Secure Cloud Infrastructure for EduTech', 'AI-Powered Tutoring and Content Generation']
  },
  {
    id: 'energy-utilities',
    name: 'Energy & Utilities',
    image: '/images/cloud_devops.jpg',
    tagline: 'Accelerating the Smart Grid and Sustainable Energy Transformation',
    summary: 'The energy sector is undergoing massive digital transformation, from grid modernization to renewable integration and customer-centric service models. NForceOne helps utilities and energy providers adopt intelligent systems that enhance reliability, sustainability, and operational agility.',
    compliance: ['Grid Reliability & Outage Detection Standards', 'ESG & Carbon Reporting Compliance', 'IoT Smart Meter & Substation Data Security', 'Regulatory Compliance Automation'],
    solutions: ['Smart Grid Management and IoT Integration', 'Energy Trading and Forecasting Platforms', 'Customer Experience and Billing Modernization', 'Sustainability and Carbon Tracking Dashboards']
  },
  {
    id: 'insurance',
    name: 'Insurance',
    image: '/images/fintech_banking.jpg',
    tagline: 'Digital-First Insurance Operations That Build Trust and Agility',
    summary: 'Insurance providers must modernize legacy systems and meet rising customer expectations for personalized, rapid, and transparent services. NForceOne enables carriers, brokers, and insurtechs to transform claims, underwriting, and risk management with powerful technology.',
    compliance: ['Policy Data Governance', 'IoT Telematics Data Privacy', 'Anomaly & Synthetic Identity Fraud Detection Standards', 'API-Enabled Policy Admin Compliance'],
    solutions: ['Automated Claims Processing', 'Underwriting and Risk Analytics', 'Policy Management System Modernization', 'Fraud Detection and Prevention']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    image: '/images/pega_automation.jpg',
    tagline: 'Empowering Smart Factories and Supply Chain Resilience',
    summary: 'Manufacturers must embrace Industry 4.0 technologies to remain competitive, streamlining operations, digitizing production, and anticipating demand. NForceOne helps manufacturing firms modernize IT, optimize supply chains, and unlock real-time visibility from shop floor to warehouse.',
    compliance: ['NIST & CMMC Compliant Cybersecurity Stack', 'IIoT Equipment Monitoring Safety Standards', 'MES & ERP Data Integrity', 'Digital Twin Simulation Governance'],
    solutions: ['Industrial IoT and Equipment Monitoring', 'MES & ERP Integrations', 'Supply Chain Analytics and Forecasting', 'Digital Twins and Simulation Models']
  }
];

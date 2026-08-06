// Full taxonomy of all 30 Services & Subservices from nforceone.com
// Content sourced from content/Pages/services__*.md (live site crawl)

export const servicesCategories = [
  {
    category: 'Full Cycle QA',
    subservices: [
      { id: 'manual-testing', name: 'Manual Testing', summary: 'Even in an automated world, manual testing remains essential for validating real-world user behaviour, uncovering edge cases, and improving usability and reliability before your product goes live.' },
      { id: 'automation-testing', name: 'Automation Testing', summary: 'Automation testing accelerates release cycles and maintains high product quality, enabling rapid, repeatable validation of application functionality, performance, and reliability across every build.' },
      { id: 'consulting-testing', name: 'Consulting Testing', summary: 'Leverage 15+ years of proven testing expertise to elevate your QA processes, reduce testing costs, and eliminate quality issues from your software products.' },
      { id: 'outsourcing-testing', name: 'Outsourcing Testing', summary: 'Outsourcing your software testing gives you access to specialized expertise, reduced operational costs, and faster delivery timelines through dedicated, scalable QA teams.' },
      { id: 'ai-testing', name: 'AI Testing', summary: 'We test LLMs, chatbots, and voice agents across accuracy, safety, and scalability benchmarks, eliminating hallucination, bias, and model-drift blind spots using human and automated QA frameworks.' }
    ]
  },
  {
    category: 'Services By Type',
    subservices: [
      { id: 'ux-testing', name: 'UX Testing', summary: 'UI/UX and usability testing focuses on how real users interact with your product, ensuring it is not just functional but intuitive, accessible, and enjoyable to use.' },
      { id: 'performance-testing', name: 'Performance Testing', summary: 'Performance testing ensures your software performs reliably under real-world conditions, detecting speed, stability, and scalability issues before your users experience them.' },
      { id: 'functional-testing', name: 'Functional Testing', summary: 'Functional testing validates every feature against business requirements, simulating real-world scenarios to identify and resolve issues before they reach your users.' },
      { id: 'regression-testing', name: 'Regression Testing', summary: 'Regression testing ensures that new updates, enhancements, or bug fixes do not unintentionally break existing functionality, maintaining stability and user trust across every release.' },
      { id: 'integration-testing', name: 'Integration Testing', summary: 'Integration testing validates how different modules, services, and systems interact, catching data mismatches, interface issues, and communication failures before they reach production.' },
      { id: 'compatibility-testing', name: 'Compatibility Testing', summary: 'Compatibility testing ensures your software performs consistently across different devices, browsers, operating systems, and network environments, delivering a seamless experience to every user.' }
    ]
  },
  {
    category: 'Services By Platform',
    subservices: [
      { id: 'pos-testing', name: 'POS Testing', summary: 'In retail and hospitality, every transaction matters. Our POS testing ensures system stability, seamless integration, and secure user experiences across terminals and channels.' },
      { id: 'payment-testing', name: 'Payment Testing', summary: 'One payment glitch can mean lost sales and broken trust. Our testing keeps e-commerce and in-app transactions smooth, secure, and reliable across every gateway and channel.' },
      { id: 'iot-testing', name: 'IoT Testing', summary: 'IoT systems are intricate by nature, where hardware, software, and data meet. Our end-to-end testing uncovers hidden flaws early across devices, networks, and platforms.' },
      { id: 'mobile-app-testing', name: 'Mobile App Testing', summary: 'Modern users demand speed, security, and seamless compatibility. Our end-to-end mobile testing safeguards your app from bugs and delivers flawless global performance.' },
      { id: 'mobile-and-device-testing', name: 'Mobile & Device Testing', summary: 'Mobile ecosystems are fragmented across devices, OS versions, networks, and hardware. We deliver comprehensive testing covering manual, automation, network validation, and distributed testing at scale.' },
      { id: 'web-app-testing', name: 'Web App Testing', summary: 'Delivering a fast, secure, and intuitive web experience is no longer optional. Even small issues can cost you traffic, reputation, and revenue.' },
      { id: 'cloud-testing', name: 'Cloud Testing', summary: 'Cloud apps demand peak performance, airtight security, and scalable reliability. Our testing simulates real-world conditions to validate resilience and meet SLAs.' }
    ]
  },
  {
    category: 'Engineering & AI',
    subservices: [
      { id: 'software-development', name: 'Software Development', summary: 'We build custom software solutions tailored to your business needs, delivering scalable, secure, and high-performing applications that drive growth and innovation.' },
      { id: 'artificial-intelligence', name: 'Artificial Intelligence', summary: 'We design and deploy AI-powered solutions that automate processes, unlock data-driven insights, and enhance decision-making across industries.' },
      { id: 'pega-development', name: 'Pega Development', summary: 'Our PEGA-certified experts design, build, and optimize enterprise-grade BPM and CRM solutions, streamlining workflows and driving operational efficiency with intelligent automation.' },
      { id: 'pega-testing', name: 'Pega Testing', summary: 'We ensure flawless PEGA applications with end-to-end functional, regression, and performance testing, delivering reliable, high-quality solutions that align with business goals.' },
      { id: 'devops', name: 'DevOps', summary: 'We help businesses adopt modern DevOps practices, transforming software delivery into a fast, repeatable, and reliable process.' }
    ]
  },
  {
    category: 'Data & Management',
    subservices: [
      { id: 'database-management', name: 'Database Management', summary: 'With years of experience across SQL and NoSQL ecosystems, our database experts design, implement, and maintain high-performing, scalable, and secure database environments for businesses of all sizes.' },
      { id: 'data-analytics', name: 'Data Analytics', summary: 'Smarter decisions start with clearer data. Our advanced analytics frameworks transform information into action, empowering every level of your organization, from rapid dashboards to predictive modeling pipelines.' },
      { id: 'big-data', name: 'Big Data', summary: 'We architect and manage robust big data ecosystems that capture, process, and analyze massive datasets, empowering businesses with actionable insights and smarter decision-making.' },
      { id: 'digital-app-development', name: 'Digital App Development', summary: 'We design and develop intuitive, high-performing web and mobile applications that deliver seamless user experiences and accelerate digital transformation for businesses of all sizes.' },
      { id: 'intelligent-rpa', name: 'Intelligent RPA', summary: 'We implement AI-powered robotic process automation that streamlines repetitive tasks, boosts accuracy, and enhances productivity across your enterprise operations.' },
      { id: 'management-services', name: 'Management Services', summary: 'We provide end-to-end IT management, ensuring secure, reliable, and optimized operations that enable businesses to focus on growth while we handle the complexity.' }
    ]
  }
];

// Key capabilities & sub-disciplines per service, sourced from each service's live page
const subserviceDetails = {
  'manual-testing': {
    features: ['Functional Testing', 'Regression Testing', 'UX & Usability Testing', 'Compatibility Testing', 'Integration Testing', 'System Testing'],
    subservices: ['Mobile Testing', 'Cross-Platform Testing', 'End-to-End Testing', 'Exploratory Edge-Case Validation']
  },
  'automation-testing': {
    features: ['Functional Testing', 'Load and Performance Testing', 'Security Testing', 'UI Testing', 'Regression Testing', 'API Testing'],
    subservices: ['Integration Testing', 'User Acceptance Testing (UAT)', 'Smoke Testing', 'CI/CD Pipeline Integration']
  },
  'consulting-testing': {
    features: ['QA Process Audit', 'QA Process Improvement', 'Test Automation Setup', 'Pre-Certification Audit', 'Support for Unique Software Environments'],
    subservices: ['API Testing', 'Integration Testing', 'User Acceptance Testing (UAT)', 'Smoke Testing']
  },
  'outsourcing-testing': {
    features: ['Manual Testing', 'Automated Testing', 'Web & Web App Testing', 'Mobile Testing'],
    subservices: ['Desktop Testing', 'IoT Testing', 'Dedicated Offshore QA Teams', 'Scalable Engagement Models']
  },
  'ai-testing': {
    features: ['Human-Like Performance Validation', 'Model Robustness & Reliability', 'Multi-Modal & Platform Compatibility', 'Bias, Safety & Compliance', 'Continuous Evaluation', 'Real-World Readiness'],
    subservices: ['Manual QA with Golden Sets', 'Automated LLM Test Harnesses', 'Voice Bot & IVR Testing', 'Prompt Regression Testing', 'RLHF Evaluation & Ranking']
  },
  'ux-testing': {
    features: ['Heuristic Evaluation', 'User Testing (Moderated & Unmoderated)', 'A/B Testing', 'Remote Usability Testing', 'Clickstream & Heatmap Analysis', 'Accessibility Testing (WCAG)'],
    subservices: ['First-Click Testing', 'Websites & Web Apps', 'Mobile Applications', 'SaaS & Enterprise Tools']
  },
  'performance-testing': {
    features: ['Load Testing', 'Spike Testing', 'Stress Testing', 'Volume Testing', 'Endurance Testing', 'Scalability Testing'],
    subservices: ['Websites & Web Apps', 'Mobile Applications', 'Desktop Applications', 'Cloud Services (SaaS/PaaS/IaaS)']
  },
  'functional-testing': {
    features: ['Smoke Testing', 'Regression Testing', 'User Acceptance Testing (UAT)', 'Integration Testing', 'Module Testing', 'System Testing'],
    subservices: ['Unit Testing', 'Exploratory Testing', 'Sanity Testing', 'Enterprise & IoT Software Coverage']
  },
  'regression-testing': {
    features: ['Selective Regression Testing', 'Full Regression Testing', 'Automated Regression Testing', 'Cross-Platform Consistency Checks'],
    subservices: ['Localization Regression Validation', 'Websites & Web Apps', 'Cloud & SaaS Platforms', 'APIs & Microservices']
  },
  'integration-testing': {
    features: ['Top-Down Integration Testing', 'Bottom-Up Integration Testing', 'Big Bang Integration Testing', 'Incremental Integration Testing'],
    subservices: ['Websites & Web Apps', 'Enterprise Systems', 'Cloud & Microservices Architectures', 'Third-Party API Validation']
  },
  'compatibility-testing': {
    features: ['Browser Compatibility Testing', 'Device Compatibility Testing', 'OS Compatibility Testing', 'Localization Testing'],
    subservices: ['Security Testing', 'Websites & Web Apps', 'Mobile Applications', 'Cloud-Based Platforms']
  },
  'pos-testing': {
    features: ['Manual & Exploratory Testing', 'Automated Regression Suites', 'Compatibility Testing', 'Performance Testing', 'Security & Penetration Testing', 'Localization Testing'],
    subservices: ['Retail POS', 'Mobile POS', 'Omnichannel POS', 'Restaurant POS', 'Self-Service Kiosks']
  },
  'payment-testing': {
    features: ['Performance Testing', 'Functional Testing', 'Localization Testing', 'Compatibility Testing', 'Security Testing', 'Compliance Testing (PCI-DSS, PSD2, GDPR)'],
    subservices: ['Payment Gateways (Stripe, PayPal, Razorpay, Adyen)', 'Mobile Payment Apps & Wallets', 'POS Card-Present Transactions', 'Subscriptions & Recurring Billing']
  },
  'iot-testing': {
    features: ['Usability Testing', 'Compatibility Testing', 'Performance Testing', 'Functional Testing', 'Security Testing', 'Scalability Testing'],
    subservices: ['Healthcare Devices & Wearables', 'Smart Home Ecosystems', 'Energy-Saving Solutions', 'Fleet Management Systems', 'Agriculture Monitoring Solutions']
  },
  'mobile-app-testing': {
    features: ['Manual Testing', 'Automated Testing', 'Compatibility Testing', 'Performance Testing', 'Security Testing', 'Localization Testing'],
    subservices: ['Native iOS & Android Apps', 'Cross-Platform Apps (Flutter, React Native, Xamarin)', 'Mobile Web Apps', 'Hybrid Mobile Apps']
  },
  'mobile-and-device-testing': {
    features: ['Mobile Functional Testing', 'Automation Testing', 'Network & Connectivity Testing', 'Camera & Hardware Validation', 'Performance & Load Testing', 'Beta & User Acceptance Testing', 'Distributed Testing'],
    subservices: ['iOS Devices (iPhone, iPad)', 'Android Device Fragmentation', 'Custom Device Integrations', 'Hardware-Integrated Applications']
  },
  'web-app-testing': {
    features: ['Performance Testing', 'Usability Testing', 'Functional Testing', 'Compatibility Testing', 'Security Testing', 'Load Testing'],
    subservices: ['Marketing & E-Commerce Websites', 'Web Portals & Admin Panels', 'Single-Page Web Applications', 'SaaS Applications']
  },
  'cloud-testing': {
    features: ['Performance Testing', 'Functional Testing', 'Load Testing', 'Security Testing', 'Compatibility Testing', 'Latency Testing'],
    subservices: ['SaaS Multi-Tenant Platforms', 'IaaS Virtualized Infrastructure', 'PaaS Deployment Environments', 'Network as a Service (NaaS)']
  },
  'software-development': {
    features: ['Custom Software Solutions', 'Web Application Development', 'Mobile App Development', 'Custom Application Development', 'Cross-Platform Compatibility', 'Data Security & Privacy'],
    subservices: ['Enterprise Applications', 'Self-Service Portals', 'Omnichannel Platforms', 'Industry-Specific Software', 'Custom Product Development']
  },
  'artificial-intelligence': {
    features: ['Machine Learning (ML)', 'AI-Powered Chatbots (LLM + RAG)', 'AI-Powered IVR Systems', 'Multi-Agent Systems', 'RLHF & Feedback Loops', 'Intelligent Process Automation'],
    subservices: ['Predictive Analytics Platforms', 'Computer Vision Applications', 'Recommendation Engines', 'NLP Solutions', 'Custom AI/ML Models']
  },
  'pega-development': {
    features: ['AI-Powered Decisioning', 'Workflow Automation', 'Enterprise Integration', 'Digital Interaction Enablement', 'Customer Relationship Management', 'IVR/IVA Intelligence Enablement'],
    subservices: ['Customer Service Applications', 'BPM Applications', 'Digital Self-Service Portals', 'Industry-Specific PEGA Solutions', 'Legacy Modernization with PEGA']
  },
  'pega-testing': {
    features: ['Automated Pega Test Suites', 'Pega Micro-Journey & Case Lifecycle Testing', 'Compatibility Testing', 'Case Management Validation', 'Robotic Automation Testing'],
    subservices: ['App Studio & Dev Studio Workflows', 'Pega Deployment Manager Pipelines', 'Pega Scenario & Unit Testing', 'Pega Cloud Services (Infinity)']
  },
  'devops': {
    features: ['CI/CD Pipeline Setup', 'Infrastructure as Code (IaC)', 'Cloud Infrastructure Management', 'Containerization & Orchestration', 'Monitoring & Observability', 'Security & Compliance Automation'],
    subservices: ['Assessment & Strategy', 'Toolchain Design', 'Pipeline & Infra Automation', 'Monitoring & Alerting Setup', 'Security & Access Control']
  },
  'database-management': {
    features: ['Database Architecture & Design', 'DBA-as-a-Service (Managed Administration)', 'Performance Tuning & Query Optimization', 'Cloud Migration & Database Modernization', 'Backup, Recovery & HA Setup', 'Security, Compliance & Access Management', 'NoSQL & Distributed Database Solutions', 'DataOps & CI/CD for Databases'],
    subservices: ['Relational Databases (RDBMS)', 'NoSQL Databases', 'Cloud-Managed Databases', 'Distributed Databases', 'In-Memory Databases', 'Industry-Specific Database Solutions']
  },
  'data-analytics': {
    features: ['Data Collection and Integration', 'Data Cleansing and Preparation', 'Advanced Analytics (Descriptive, Predictive, Prescriptive)', 'Customized Dashboards and Reports', 'Machine Learning and AI', 'Continuous Monitoring', 'Business Insights & Recommendations'],
    subservices: ['Descriptive Analytics', 'Predictive Analytics', 'Prescriptive Analytics', 'Real-Time Dashboards', 'Data Pipeline Engineering']
  },
  'big-data': {
    features: ['Data Discovery and Collection', 'Data Analysis and Insights', 'Data Storage and Management', 'Predictive Analytics', 'Business Intelligence Dashboards', 'Real-Time Analytics'],
    subservices: ['Data Lake Architecture', 'Distributed Data Processing', 'Real-Time Streaming Pipelines', 'BI Dashboard Design']
  },
  'digital-app-development': {
    features: ['Concept-to-Reality Product Design', 'User-Centric UX/UI Design', 'Multi-Platform Development', 'Scalability & Agile Architecture', 'Cutting-Edge Tech Integration (AI, IoT)', 'Embedded Quality Assurance'],
    subservices: ['Web Applications', 'Mobile Applications', 'Cross-Platform Apps', 'AI & IoT-Enabled Apps']
  },
  'intelligent-rpa': {
    features: ['Attended & Unattended Bot Development', 'Workflow & Business Process Automation', 'Document & Data Extraction', 'Legacy System Integration', 'AI-Powered Cognitive Automation', 'Bot Governance & Monitoring'],
    subservices: ['Process Discovery & Assessment', 'RPA Bot Development', 'Cognitive Automation', 'Automation Center of Excellence']
  },
  'management-services': {
    features: ['IT Infrastructure Monitoring & Support', 'SLA & Vendor Management', 'Incident & Problem Management', 'IT Governance & Risk Management', 'Helpdesk & End-User Support', 'Continuous Optimization & Cost Control'],
    subservices: ['Managed Infrastructure', 'Managed Security Operations', 'Managed Cloud Operations', 'IT Service Desk']
  }
};

// Flat list of all 30 subservices for lookup (used by Navbar and ServiceDetailView)
export const allSubservicesList = servicesCategories.flatMap(cat =>
  cat.subservices.map(s => ({
    ...s,
    title: s.name,
    category: cat.category,
    image: '/images/qa_dashboard.jpg',
    features: subserviceDetails[s.id].features,
    subservices: subserviceDetails[s.id].subservices
  }))
);

// High-level category summary cards for main ServicesView
export const servicesList = [
  {
    id: 'qa',
    title: 'Quality Assurance & Testing',
    category: 'Full-Cycle QA',
    image: '/images/qa_dashboard.jpg',
    summary: 'We deliver comprehensive testing and QA services that ensure software reliability, performance, and security, helping businesses achieve flawless user experiences and faster time-to-market.',
    features: ['Manual & Automated QA', 'AI Testing', 'POS & Payment Validation', 'Performance & Load Engineering'],
    subservices: ['Manual Testing', 'Automation Testing', 'Consulting Testing', 'Outsourcing Testing', 'AI Testing']
  },
  {
    id: 'services-by-type',
    title: 'Testing By Type & Methodology',
    category: 'QA Disciplines',
    image: '/images/hero_command_center.jpg',
    summary: 'From heuristic UX evaluation to load, functional, regression, and cross-browser compatibility testing, validating every dimension of how your software performs, scales, and feels to real users.',
    features: ['UX & Accessibility Testing', 'Load & Stress Benchmarking', 'Functional & Logic QA', 'Regression Automation'],
    subservices: ['UX Testing', 'Performance Testing', 'Functional Testing', 'Regression Testing', 'Integration Testing', 'Compatibility Testing']
  },
  {
    id: 'services-by-platform',
    title: 'Testing By Platform & Devices',
    category: 'Platform QA',
    image: '/images/cloud_devops.jpg',
    summary: 'Specialized QA for POS terminals, payment gateways, IoT devices, mobile apps, web applications, and cloud platforms, so every channel your customers touch works exactly as intended.',
    features: ['POS & Payment Gateways', 'IoT Sensor Protocol QA', 'Real Mobile Device Matrix', 'Cloud Resilience Testing'],
    subservices: ['POS Testing', 'Payment Testing', 'IoT Testing', 'Mobile App Testing', 'Web App Testing', 'Cloud Testing']
  },
  {
    id: 'software-dev',
    title: 'Custom Software & Engineering',
    category: 'Software Engineering',
    image: '/images/hero_command_center.jpg',
    summary: 'Custom web, mobile, and enterprise software built for high growth, from concept-to-reality product design and multi-platform development to scalable, secure architecture tailored to your business roadmap.',
    features: ['Full-Stack Web Engineering', 'Cloud-Native Architecture', 'API Integrations', 'Digital Transformation'],
    subservices: ['Software Development', 'Digital App Development', 'API Integrations', 'Legacy Modernization']
  },
  {
    id: 'pega-devops',
    title: 'Pega & DevOps Infrastructure',
    category: 'Enterprise Platforms',
    image: '/images/pega_automation.jpg',
    summary: 'PEGA-certified experts design enterprise-grade BPM and CRM workflow automation, backed by modern DevOps practices (CI/CD pipelines, Infrastructure as Code, and cloud automation) that turn software delivery into a fast, repeatable, reliable process.',
    features: ['Pega PRPC System Design', 'Automated Business Workflows', 'CI/CD Automation', 'Kubernetes & Docker Scaling'],
    subservices: ['Pega Development', 'Pega Testing', 'DevOps Strategy', 'Cloud Infrastructure Automation']
  },
  {
    id: 'data-ai-rpa',
    title: 'Artificial Intelligence, RPA & Data',
    category: 'Emerging Tech',
    image: '/images/fintech_banking.jpg',
    summary: 'AI-powered solutions, intelligent RPA bots, and end-to-end data engineering, from custom ML models and LLM chatbots to database management, analytics dashboards, and big data pipelines that unlock data-driven decision-making.',
    features: ['Robotic Process Automation', 'Predictive Data Analytics', 'Big Data Engineering', 'Database Management'],
    subservices: ['Artificial Intelligence', 'Intelligent RPA', 'Big Data', 'Database Management', 'Data Analytics']
  }
];

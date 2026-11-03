import { Content } from './content.model';
import { PROFILE } from './profile';

export const EN: Content = {
  meta: {
    title: 'Orlando Guzman · Tech Lead & Cloud Solutions Engineer',
    description:
      'Tech Lead at AXA modernizing legacy core systems into cloud-ready, API-led architectures with Azure, Quarkus and MuleSoft. Journey, projects, talks and writing.',
  },
  nav: {
    about: 'README.md',
    journey: 'journey.log',
    architecture: 'architecture.yaml',
    work: 'projects/',
    talks: 'talks.md',
    writing: 'writing/',
    roadmap: 'roadmap.md',
    contact: 'contact.sh',
    downloadCv: 'Download CV',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    switchLang: 'Ver en español',
    menu: 'Sections',
  },
  hero: {
    greeting: 'Hi, I am',
    headline: [
      'Tech Lead',
      'Software Engineer at AXA',
      'Cloud Solutions Engineer in the making',
      'Modernizing legacy systems with Azure, Quarkus & API design',
    ],
    tagline:
      'I modernize legacy core systems into cloud-ready service architectures — without disrupting the business that runs on them.',
    roles: ['legacy modernization', 'API-led integration', 'Azure serverless', 'resilient systems'],
    code: {
      role: 'Tech Lead @ AXA',
      focus: ['Legacy modernization', 'API-led integration', 'Azure'],
      stack: ['Python', 'Java 21', 'REST APIs', 'Azure'],
      learning: ['AZ-305', 'AWS'],
      nextStop: 'Solutions Architect',
    },
    ctaCv: 'Download CV',
    ctaContact: "Let's talk",
    location: 'Mexico City · Remote friendly',
    photoAlt: 'Orlando Guzman smiling next to a neon sign that reads "Nunca pares de aprender"',
    scroll: 'Start the journey',
  },
  about: {
    file: 'README.md',
    title: 'About me',
    lead: 'I connect two worlds: legacy cores with years of proven business rules, and the cloud-native platforms that move the business forward.',
    paragraphs: [
      "I'm the Tech Lead of a connectivity modernization project at AXA Seguros México. I lead a team of 9 Java and Progress OpenEdge developers, working with business analysts and the solutions architect to expose an insurance core as well-designed REST services for quoting, policy issuance and endorsements.",
      'The target architecture combines MuleSoft API-led integration, Azure Logic Apps, Functions and Service Bus, Quarkus (Java 21) microservices on Red Hat OpenShift, and Azure SQL / PostgreSQL as the operational backbone for auditing, queue tracking and bulk movements.',
      'What I focus on: atomic transactions, idempotency and end-to-end traceability; resilient integrations with retries, health checks and auditability; and CI/CD with Azure DevOps and SonarQube quality gates.',
      'At university, I built an autonomous drone that avoided obstacles with computer vision (YOLOv3-tiny on a Raspberry Pi 4) and reported its position over LoRa, where there is no network coverage. As a Microsoft Learn Gold Student Ambassador, I taught 70+ people to ship full-stack apps on Azure.',
    ],
    motto: 'Never stop learning',
    stats: [
      { value: '3+', label: 'years in the insurance domain' },
      { value: '9', label: 'developers led on modernization' },
      { value: '70+', label: 'people taught to deploy on Azure' },
      { value: '500+', label: 'attendees at events I organized' },
    ],
  },
  journey: {
    file: 'journey.log',
    title: 'The journey so far',
    intro: 'Every stop added a new perspective: from teaching cloud to students, to integrating systems, to leading the modernization of an insurance core.',
    stops: [
      {
        date: 'Mar 2021',
        title: 'Microsoft Learn Student Ambassador',
        org: 'Microsoft',
        description:
          'Reached the Gold milestone. Taught 70+ people to deploy full-stack web apps on Azure and organized Tech Week UPIITA, with 500+ attendees across 6+ countries.',
        tags: ['Azure', 'Community', 'Teaching'],
      },
      {
        date: '2022',
        title: 'Speaker & hackathon mentor',
        org: 'Jalisco Talent Land · BBVA Hackathon',
        description:
          'Spoke about Azure Static Web Apps at Jalisco Talent Land 2022 and mentored teams in the Microsoft track of Talent Hackathon and BBVA Hackathon.',
        tags: ['Public speaking', 'Mentoring'],
      },
      {
        date: 'Aug 2022 – Jan 2023',
        title: 'Autonomous UAV with computer vision',
        org: 'Telematics thesis · UPIITA-IPN',
        description:
          'An autonomous drone that flew to coordinates chosen on a map, dodged obstacles with YOLOv3-tiny on a Raspberry Pi 4 and reported its position over LoRa.',
        tags: ['Python', 'YOLOv3-tiny', 'LoRa', 'Pixhawk'],
      },
      {
        date: 'Jan 2023',
        title: 'Bachelor in Telematics',
        org: 'UPIITA · Instituto Politécnico Nacional',
        description: 'Graduated with a GPA of 94/100, with a foundation in networks, systems and software.',
        tags: ['Education'],
      },
      {
        date: 'May 2023 – Dec 2023',
        title: 'Backend Developer',
        org: 'NEORIS',
        description:
          'Developed and deployed Java REST APIs consuming SOAP services, coordinating with third-party front-end teams and external developers.',
        tags: ['Java', 'REST', 'SOAP'],
      },
      {
        date: 'Dec 2023 – Jan 2025',
        title: 'IT Business / System Analyst',
        org: 'AXA Seguros',
        description:
          'Led technical teams implementing service connectivity with strategic partners. Wrote user stories, mock-ups and acceptance criteria, keeping requirements traceable across projects.',
        tags: ['Requirements', 'Integration'],
      },
      {
        date: 'Jan 2025 – May 2026',
        title: 'Software Engineer',
        org: 'AXA Seguros',
        description:
          'Stabilized critical accounting workflows in the core policy system (Progress OpenEdge) and contributed to the design of the legacy-to-cloud migration.',
        tags: ['Progress OpenEdge', 'Cloud migration'],
      },
      {
        date: 'Jun 2026 – Present',
        title: 'Tech Lead · Connectivity Modernization',
        org: 'AXA Seguros',
        description:
          'Leading 9 developers to expose a legacy insurance core as REST services (≈13K quotes, 1K issuances and 500 endorsements per month), with serverless orchestration, queue-based resilience and API-led governance.',
        tags: ['Azure', 'Quarkus', 'MuleSoft', 'Leadership'],
        current: true,
      },
      {
        date: 'Next stop',
        title: 'Solutions Architect',
        org: 'The destination I am working towards',
        description:
          'Designing architecture strategies that fit each business: when to wrap, when to rebuild, and how to move to the cloud without stopping the operation.',
        tags: ['AZ-305', 'AWS', 'Architecture'],
        upcoming: true,
      },
    ],
  },
  architecture: {
    file: 'architecture.yaml',
    title: 'How I build: exposing a legacy core without rewriting it',
    intro:
      'A simplified view of the modernization I lead. The core keeps doing what it does best, while new flows are built around it through API-led layers.',
    disclaimer: 'Generic diagram. No internal details are shown.',
    zones: {
      internet: 'Internet',
      mulesoft: 'MuleSoft · API-led',
      azure: 'Azure',
      openshift: 'Red Hat OpenShift',
      legacy: 'Legacy core',
    },
    layers: {
      channels: 'Channels & partners',
      channelsSub: 'Digital channels consuming the public API',
      experience: 'Experience API',
      experienceSub: 'The only endpoint exposed to the internet · OAuth 2.0 · rate limiting',
      process: 'Process API',
      processSub: 'Internal · connects the orchestrators and microservices',
      logicApps: 'Azure Logic Apps',
      logicAppsSub: 'One orchestrator per business flow',
      functions: 'Azure Functions',
      functionsSub: 'Python · health check and queue processing',
      quarkus: 'Quarkus microservices',
      quarkusSub: 'Java 21 on OpenShift · product rules and catalogs',
      serviceBus: 'Azure Service Bus',
      serviceBusSub: 'Only reached by Logic Apps and Functions · outages and bulk movements',
      data: 'Azure SQL / PostgreSQL',
      dataSub: 'Audit, queue tracking and bulk movements · stored procedures from serverless',
      system: 'System API',
      systemSub: 'Internal · wraps the core, calculation engines and auxiliary services as REST',
      core: 'Progress OpenEdge 11.7',
      coreSub: 'PASOE on Linux · REST services (.war / .ear)',
      engines: 'Calculation engines',
      enginesSub: 'Rating and pricing services',
      auxiliary: 'Auxiliary system services',
      auxiliarySub: 'Documents, notifications and other supporting services',
    },
    principlesTitle: 'Design principles',
    principles: [
      {
        title: 'Every cross-cloud call goes through the API gateway',
        text: 'Experience, Process and System APIs keep a clear split between what is public and what is internal, with security and rate limiting in one place.',
      },
      {
        title: 'One orchestrator per business flow',
        text: 'Quoting, issuance and documents each have their own flow, so they can evolve, scale and fail independently.',
      },
      {
        title: 'If the core goes down, the transaction waits — without duplicates',
        text: 'A single health check decides when to queue. UUID/VIN idempotency keys make retries safe, so nothing is issued twice.',
      },
      {
        title: 'Traceable from end to end',
        text: 'Every call carries a correlation ID, and every movement is audited, so support can follow a transaction across clouds.',
      },
    ],
  },
  work: {
    file: 'projects/',
    title: 'Featured work',
    projects: [
      {
        title: 'Insurance core connectivity modernization',
        period: '2026 – Present · AXA Seguros',
        summary:
          'Exposing a legacy Progress OpenEdge core as REST services for quoting, policy issuance and endorsements, without disrupting the daily operation.',
        bullets: [
          'Co-designed a four-zone target architecture: Azure, MuleSoft, Red Hat OpenShift and the legacy core.',
          'Queue-based issuance with health-check–driven retries, so transactions survive core downtime.',
          'First Quarkus microservice (product conditions) delivered, with CI/CD and SonarQube coverage gates.',
        ],
        tags: ['Azure', 'MuleSoft', 'Quarkus', 'Java 21', 'Progress OpenEdge', 'Azure DevOps'],
      },
      {
        title: 'Autonomous UAV with computer vision and LoRa',
        period: 'Aug 2022 – Jan 2023 · Telematics thesis',
        summary:
          'A drone built from scratch that flies to coordinates chosen on a map, dodges obstacles with computer vision and reports its position every second over LoRa — no Wi-Fi or cellular coverage needed.',
        bullets: [
          'Edge AI: a pre-trained YOLOv3-tiny model runs on a Raspberry Pi 4 at ~16 FPS and decides on board which way to dodge.',
          'Long-range radio: LoRa SX1276 modules at 915 MHz for commands and telemetry, tested on campus within 1 km.',
          'Hardest part: building and tuning the drone from zero, and keeping GPS and magnetometer stable flying at 1.5 m.',
        ],
        tags: ['Python', 'Flask', 'YOLOv3-tiny', 'Raspberry Pi 4', 'LoRa SX1276', 'Pixhawk', 'MAVLink'],
        triangle: {
          nodes: [
            { title: 'Ground station', lines: ['Laptop · Flask web app', 'Map: pick target, start flight', 'LoRa SX1276 via USB'] },
            { title: 'Raspberry Pi 4', lines: ['Camera + YOLOv3-tiny · ~16 FPS', 'Python threads: route + vision', 'LoRa SX1276 via GPIO UART'] },
            { title: 'Pixhawk + drone', lines: ['GPS + barometer + magnetometer', 'Flight control (ArduCopter)', 'Receives MAVLink commands'] },
          ],
          links: [
            { title: 'LoRa · 915 MHz', lines: ['start + coordinates →', '← live position every 1 s'] },
            { title: 'Serial UART · TELEM2', lines: ['TX · RX · shared GND', 'MAVLink'] },
            { title: 'No direct link', lines: ['GPS position is', 'relayed by the Pi'] },
          ],
        },
        details: {
          label: 'How it works',
          steps: [
            'On the ground station, a Flask web app shows a map: you pick the destination and start the flight. The laptop sends the start command and coordinates through a LoRa SX1276 module connected by USB.',
            'On the drone, a second LoRa module wired to the Raspberry Pi 4 GPIO UART receives them. The Pi forwards takeoff and heading commands to the Pixhawk over serial (TELEM2: TX, RX and a shared GND) using MAVLink.',
            'While flying, a Python thread keeps the route and the camera feeds YOLOv3-tiny. When an object passes a size threshold, the drone checks which side of the frame it covers most and dodges to the opposite side, then resumes the route.',
            'Every second the drone sends its live position back over LoRa, so the web app updates the map in real time.',
          ],
        },
        gallery: [
          { src: '/images/uav/flight-test.webp', alt: 'Orlando, seen from behind, flying the drone over a grass field', caption: 'Flight test on campus' },
          { src: '/images/uav/ground-station.webp', alt: 'The drone next to a laptop running the ground-station web app with a map', caption: 'Ground station: Flask web app and the drone' },
          { src: '/images/uav/flight-log.webp', alt: 'ArduCopter log viewer showing the flight route on a map and the altitude graph', caption: 'Flight log: route and altitude' },
          { src: '/images/uav/lora-range-field.webp', alt: 'Satellite map with a measured line across the campus field', caption: 'LoRa range test across the field' },
          { src: '/images/uav/lora-range-buildings.webp', alt: 'Satellite map with a measured line between campus buildings', caption: 'LoRa range test between buildings' },
        ],
      },
      {
        title: 'orlandomyjourney.dev',
        period: '2026',
        summary: 'This site: an Angular app prerendered to static HTML, bilingual, and deployed to Netlify with continuous deployment from GitHub.',
        bullets: ['Dracula and Alucard themes, English and Spanish routes, and a CV that updates with every push.'],
        tags: ['Angular', 'TypeScript', 'Netlify'],
        link: { label: 'View source', url: PROFILE.links.repo },
      },
    ],
  },
  stack: {
    file: 'stack.json',
    title: 'Tech stack',
    groups: [
      {
        name: 'Cloud & architecture',
        items: ['Azure Functions', 'Logic Apps', 'Service Bus', 'Key Vault', 'Static Web Apps', 'API-led design', 'Event-driven design', 'Idempotency & resilience'],
      },
      { name: 'Integration & APIs', items: ['MuleSoft API Manager', 'REST', 'SOAP', 'OAuth 2.0', 'Swagger / OpenAPI'] },
      {
        name: 'Languages & frameworks',
        items: ['Java 21 · Quarkus', 'Python · FastAPI', 'Progress OpenEdge (ABL)', 'TypeScript', 'Angular', 'Node.js / Express', 'C / C++'],
      },
      { name: 'Data', items: ['Azure SQL', 'PostgreSQL', 'SQL', 'MongoDB'] },
      { name: 'DevOps & tools', items: ['Azure DevOps', 'SonarQube', 'Git / GitHub', 'Docker', 'Red Hat OpenShift', 'Linux / UNIX', 'Jira'] },
      { name: 'Leadership', items: ['Technical leadership', 'Estimation & roadmapping', 'Stakeholder reporting', 'Mentoring', 'Scrum'] },
    ],
  },
  talks: {
    file: 'talks.md',
    title: 'Talks & community',
    intro: 'I enjoy sharing what I learn on stage and in workshops. I am currently returning to creating content regularly.',
    topicsTitle: 'Topics I love to talk about',
    topics: [
      'Cloud computing with Azure (and now exploring AWS)',
      'Migrating legacy systems to new technologies without disrupting the operation',
      'Choosing an architecture strategy based on what the business needs',
      'Resilience patterns: queues, retries and idempotency',
    ],
    items: [
      {
        year: '2022',
        title: 'Deploying web apps with Azure Static Web Apps',
        event: 'Jalisco Talent Land 2022 · Speaker',
        description: 'A hands-on session on taking a full-stack app from GitHub to Azure in minutes.',
      },
      {
        year: '2022',
        title: 'Microsoft track mentor',
        event: 'Talent Hackathon & BBVA Hackathon 2022',
        description: 'Helped teams design and ship their solutions on Azure during the hackathon.',
      },
      {
        year: '2021 – 2024',
        title: 'Workshops and Tech Week UPIITA',
        event: 'Microsoft Learn Student Ambassadors',
        description: 'Taught 70+ people to deploy on Azure and organized events with 500+ attendees across 6+ countries.',
      },
    ],
    photoAlt: 'Orlando speaking on stage at a Microsoft event',
  },
  writing: {
    file: 'writing/',
    title: 'Writing',
    intro: 'What I learn about architecture and modernization, shared on LinkedIn. No company details — just the decisions and why they matter.',
    readMore: 'Read on LinkedIn',
    prev: 'Previous post',
    next: 'Next post',
    allPosts: 'See all my posts',
    posts: [
      {
        title: 'Tech Lead today, Solutions Architect in the making',
        summary:
          'After "Software Architecture: From Developer to Architect": the shift starts when you stop asking how a tool works and ask how all the components talk and meet the business needs.',
        points: [
          'A strong development background gives you criteria to judge microservices, serverless, API management or AI, instead of following the hype.',
          'A solution is not finished until Ops can deploy, scale and run it on the infrastructure you have.',
          'Mentoring developers and running POCs on new tech is part of the job.',
        ],
        tags: ['Certification', 'Solutions architecture'],
        url: 'https://lnkd.in/p/gHRCkpz2',
      },
      {
        title: 'My first distributed system had propellers',
        summary:
          'My telematics thesis: an autonomous drone that flew to a point on a map, dodged obstacles and reported its position every second, without Wi-Fi or cellular coverage.',
        points: [
          'A triangle: Flask ground station, Raspberry Pi 4 with YOLOv3-tiny, and a Pixhawk flight controller.',
          'LoRa SX1276 at 915 MHz for the mission and telemetry; serial on TELEM2 with MAVLink to the Pixhawk.',
          'Lesson for the cloud: design for unreliable links and decide at the edge.',
        ],
        tags: ['Drones', 'Computer vision', 'LoRa'],
        url: 'https://lnkd.in/p/gvgQmDJ9',
      },
      {
        title: 'Software Architecture Foundations: it starts with people',
        summary:
          'What stuck with me from the course was not a diagram: refining a user story with analysts and developers creates a shared contract, much like the API-led mindset.',
        points: [
          'Monolith, microkernel, microservices, messaging, reactive: patterns you start spotting in real projects.',
          'Legacy platforms like Progress OpenEdge are usually monoliths — and they work.',
          'Wrapping them with APIs and messaging beats a risky rewrite.',
        ],
        tags: ['Certification', 'Software architecture'],
        url: 'https://lnkd.in/p/gH6X3a7Q',
      },
      {
        title: 'Messaging + orchestration: decoupling without losing requests',
        summary: 'Systems do not call each other directly: they talk through a broker, and an orchestrator coordinates the work.',
        points: [
          'An Azure Function enqueues in Service Bus; subscribers process when they are ready.',
          'Delivery is "at least once", so consumers must be idempotent.',
          'Fan-out/fan-in orchestration: the response depends only on the critical service.',
        ],
        tags: ['Messaging', 'Azure', 'Resilience'],
        url: 'https://lnkd.in/p/ge3GrCbh',
      },
    ],
  },
  roadmap: {
    file: 'roadmap.md',
    title: 'Next destination',
    intro: 'Where this journey is heading: becoming a Software Solutions Architect and a technical leader who helps teams modernize with confidence.',
    status: { done: 'Done', progress: 'In progress', next: 'Next' },
    goals: [
      { status: 'done', title: 'AZ-900 & Software Architecture Foundations', text: 'Certified. Also Software Architecture: From Developer to Architect, Scrum Fundamentals (SFC) and Git & GitHub.' },
      { status: 'done', title: 'Gold Microsoft Learn Student Ambassador', text: 'Three years teaching and organizing cloud communities.' },
      { status: 'done', title: 'Tech Lead', text: 'Leading a cross-platform modernization team since June 2026.' },
      { status: 'progress', title: 'Azure Solutions Architect Expert (AZ-305)', text: 'Preparing the certification to formalize the architecture practice.' },
      { status: 'progress', title: 'Expanding to AWS', text: 'Learning AWS to design multi-cloud strategies with the right tool for each case.' },
      { status: 'progress', title: 'Creating content again', text: 'A weekly series about architecture decisions, resilience and tech leadership.' },
      { status: 'next', title: 'Software Solutions Architect', text: 'Designing architecture strategies aligned with each business and leading their adoption.' },
    ],
  },
  contact: {
    file: 'contact.sh',
    title: "Let's talk",
    text: 'Open to conversations about legacy modernization, integration architecture and cloud solutions — and always happy to join a meetup or community event.',
    emailLabel: 'Send me an email',
  },
  footer: { built: 'Built with Angular and deployed on Netlify.', source: 'Source code' },
};

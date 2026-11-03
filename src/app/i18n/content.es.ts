import { Content } from './content.model';
import { PROFILE } from './profile';

export const ES: Content = {
  meta: {
    title: 'Orlando Guzman · Tech Lead y Cloud Solutions Engineer',
    description:
      'Tech Lead en AXA modernizando sistemas core legados hacia arquitecturas cloud y API-led con Azure, Quarkus y MuleSoft. Trayectoria, proyectos, charlas y artículos.',
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
    downloadCv: 'Descargar CV',
    themeToDark: 'Cambiar a tema oscuro',
    themeToLight: 'Cambiar a tema claro',
    switchLang: 'View in English',
    menu: 'Secciones',
  },
  hero: {
    greeting: 'Hola, soy',
    headline: [
      'Tech Lead',
      'Software Engineer en AXA',
      'Cloud Solutions Engineer en formación',
      'Modernizando sistemas legados con Azure, Quarkus y diseño de APIs',
    ],
    tagline:
      'Modernizo sistemas core legados hacia arquitecturas de servicios listas para la nube, sin interrumpir el negocio que depende de ellos.',
    roles: ['modernización de legados', 'integración API-led', 'Azure serverless', 'sistemas resilientes'],
    code: {
      role: 'Tech Lead @ AXA',
      focus: ['Modernización de legados', 'Integración API-led', 'Azure'],
      stack: ['Python', 'Java 21', 'APIs REST', 'Azure'],
      learning: ['AZ-305', 'AWS'],
      nextStop: 'Arquitecto de Soluciones',
    },
    ctaCv: 'Descargar CV',
    ctaContact: 'Hablemos',
    location: 'Ciudad de México · Abierto a remoto',
    photoAlt: 'Orlando Guzman sonriendo junto a un letrero de neón que dice "Nunca pares de aprender"',
    scroll: 'Comienza el viaje',
  },
  about: {
    file: 'README.md',
    title: 'Sobre mí',
    lead: 'Conecto dos mundos: cores legados con años de reglas de negocio probadas y las plataformas cloud que impulsan al negocio hacia adelante.',
    paragraphs: [
      'Soy Tech Lead de un proyecto de modernización de conectividad en AXA Seguros México. Lidero un equipo de 9 desarrolladores Java y Progress OpenEdge, junto con analistas de negocio y el arquitecto de soluciones, para exponer un core de seguros como servicios REST bien diseñados para cotización, emisión de pólizas y endosos.',
      'La arquitectura objetivo combina integración API-led con MuleSoft, Azure Logic Apps, Functions y Service Bus, microservicios Quarkus (Java 21) en Red Hat OpenShift, y Azure SQL / PostgreSQL como columna operativa para auditoría, seguimiento de colas y movimientos masivos.',
      'En lo que me enfoco: transacciones atómicas, idempotencia y trazabilidad de punta a punta; integraciones resilientes con reintentos, health checks y auditoría; y CI/CD con Azure DevOps y quality gates de SonarQube.',
      'En la universidad construí un dron autónomo que esquivaba obstáculos con visión artificial (YOLOv3-tiny en una Raspberry Pi 4) y reportaba su ubicación por LoRa, sin depender de cobertura de red. Como Microsoft Learn Gold Student Ambassador, enseñé a más de 70 personas a desplegar aplicaciones full-stack en Azure.',
    ],
    motto: 'Nunca pares de aprender',
    stats: [
      { value: '3+', label: 'años en el sector asegurador' },
      { value: '9', label: 'desarrolladores liderados en la modernización' },
      { value: '70+', label: 'personas capacitadas para desplegar en Azure' },
      { value: '500+', label: 'asistentes en eventos que organicé' },
    ],
  },
  journey: {
    file: 'journey.log',
    title: 'El viaje hasta hoy',
    intro: 'Cada parada sumó una perspectiva nueva: de enseñar cloud a estudiantes, a integrar sistemas, a liderar la modernización de un core de seguros.',
    stops: [
      {
        date: 'Mar 2021',
        title: 'Microsoft Learn Student Ambassador',
        org: 'Microsoft',
        description:
          'Alcancé el nivel Gold. Enseñé a más de 70 personas a desplegar aplicaciones web full-stack en Azure y organicé la Tech Week UPIITA, con más de 500 asistentes de más de 6 países.',
        tags: ['Azure', 'Comunidad', 'Enseñanza'],
      },
      {
        date: '2022',
        title: 'Speaker y mentor de hackathons',
        org: 'Jalisco Talent Land · BBVA Hackathon',
        description:
          'Di una charla sobre Azure Static Web Apps en Jalisco Talent Land 2022 y fui mentor de equipos en el track de Microsoft del Talent Hackathon y el BBVA Hackathon.',
        tags: ['Charlas', 'Mentoría'],
      },
      {
        date: 'Ago 2022 – Ene 2023',
        title: 'UAV autónomo con visión artificial',
        org: 'Proyecto de titulación · UPIITA-IPN',
        description:
          'Un dron autónomo que volaba a coordenadas elegidas en un mapa, esquivaba obstáculos con YOLOv3-tiny en una Raspberry Pi 4 y reportaba su ubicación por LoRa.',
        tags: ['Python', 'YOLOv3-tiny', 'LoRa', 'Pixhawk'],
      },
      {
        date: 'Ene 2023',
        title: 'Ingeniería en Telemática',
        org: 'UPIITA · Instituto Politécnico Nacional',
        description: 'Me gradué con promedio de 94/100, con bases en redes, sistemas y software.',
        tags: ['Educación'],
      },
      {
        date: 'May 2023 – Dic 2023',
        title: 'Backend Developer',
        org: 'NEORIS',
        description:
          'Desarrollé y desplegué APIs REST en Java que consumían servicios SOAP, coordinando con equipos front-end de terceros y desarrolladores externos.',
        tags: ['Java', 'REST', 'SOAP'],
      },
      {
        date: 'Dic 2023 – Ene 2025',
        title: 'IT Business / System Analyst',
        org: 'AXA Seguros',
        description:
          'Lideré equipos técnicos en la conectividad de servicios con socios estratégicos. Escribí historias de usuario, mock-ups y criterios de aceptación, manteniendo la trazabilidad de requerimientos entre proyectos.',
        tags: ['Requerimientos', 'Integración'],
      },
      {
        date: 'Ene 2025 – May 2026',
        title: 'Software Engineer',
        org: 'AXA Seguros',
        description:
          'Estabilicé flujos contables críticos del sistema core de pólizas (Progress OpenEdge) y contribuí al diseño de la migración del legado a la nube.',
        tags: ['Progress OpenEdge', 'Migración a la nube'],
      },
      {
        date: 'Jun 2026 – Hoy',
        title: 'Tech Lead · Modernización de Conectividad',
        org: 'AXA Seguros',
        description:
          'Lidero a 9 desarrolladores para exponer un core de seguros legado como servicios REST (≈13 mil cotizaciones, mil emisiones y 500 endosos al mes), con orquestación serverless, resiliencia basada en colas y gobierno API-led.',
        tags: ['Azure', 'Quarkus', 'MuleSoft', 'Liderazgo'],
        current: true,
      },
      {
        date: 'Próxima parada',
        title: 'Arquitecto de Soluciones',
        org: 'El destino hacia el que voy',
        description:
          'Diseñar estrategias de arquitectura a la medida de cada negocio: cuándo envolver, cuándo reconstruir y cómo llegar a la nube sin detener la operación.',
        tags: ['AZ-305', 'AWS', 'Arquitectura'],
        upcoming: true,
      },
    ],
  },
  architecture: {
    file: 'architecture.yaml',
    title: 'Cómo construyo: exponer un core legado sin reescribirlo',
    intro:
      'Una vista simplificada de la modernización que lidero. El core sigue haciendo lo que mejor sabe hacer, mientras los nuevos flujos se construyen a su alrededor mediante capas API-led.',
    disclaimer: 'Diagrama genérico. No muestra detalles internos.',
    zones: {
      internet: 'Internet',
      mulesoft: 'MuleSoft · API-led',
      azure: 'Azure',
      openshift: 'Red Hat OpenShift',
      legacy: 'Core legado',
    },
    layers: {
      channels: 'Canales y socios',
      channelsSub: 'Canales digitales que consumen la API pública',
      experience: 'API de Experiencia',
      experienceSub: 'El único endpoint expuesto a internet · OAuth 2.0 · rate limiting',
      process: 'API de Procesos',
      processSub: 'Interna · conecta orquestadores y microservicios',
      logicApps: 'Azure Logic Apps',
      logicAppsSub: 'Un orquestador por flujo de negocio',
      functions: 'Azure Functions',
      functionsSub: 'Python · health check y procesamiento de colas',
      quarkus: 'Microservicios Quarkus',
      quarkusSub: 'Java 21 en OpenShift · reglas de producto y catálogos',
      serviceBus: 'Azure Service Bus',
      serviceBusSub: 'Solo lo usan Logic Apps y Functions · caídas y movimientos masivos',
      data: 'Azure SQL / PostgreSQL',
      dataSub: 'Auditoría, control de colas y movimientos masivos · stored procedures desde serverless',
      system: 'API de Sistema',
      systemSub: 'Interna · expone el core, los motores de cálculo y servicios auxiliares como REST',
      core: 'Progress OpenEdge 11.7',
      coreSub: 'PASOE en Linux · servicios REST (.war / .ear)',
      engines: 'Motores de cálculo',
      enginesSub: 'Servicios de tarificación',
      auxiliary: 'Servicios auxiliares para el sistema',
      auxiliarySub: 'Documentos, notificaciones y otros servicios de apoyo',
    },
    principlesTitle: 'Principios de diseño',
    principles: [
      {
        title: 'Todo salto entre nubes pasa por el API gateway',
        text: 'Las APIs de Experiencia, Procesos y Sistema separan con claridad lo público de lo interno, con seguridad y rate limiting en un solo lugar.',
      },
      {
        title: 'Un orquestador por flujo de negocio',
        text: 'Cotización, emisión y documentos tienen cada uno su propio flujo, para evolucionar, escalar y fallar de forma independiente.',
      },
      {
        title: 'Si el core cae, la transacción espera, sin duplicarse',
        text: 'Un único health check decide cuándo encolar. Las llaves de idempotencia por UUID/VIN hacen seguros los reintentos, así nada se emite dos veces.',
      },
      {
        title: 'Trazable de punta a punta',
        text: 'Cada llamada lleva un ID de correlación y cada movimiento queda auditado, para que soporte pueda seguir una transacción entre nubes.',
      },
    ],
  },
  work: {
    file: 'projects/',
    title: 'Proyectos destacados',
    projects: [
      {
        title: 'Modernización de conectividad de un core de seguros',
        period: '2026 – Hoy · AXA Seguros',
        summary:
          'Exponer un core legado en Progress OpenEdge como servicios REST para cotización, emisión de pólizas y endosos, sin interrumpir la operación diaria.',
        bullets: [
          'Codiseñé una arquitectura objetivo de cuatro zonas: Azure, MuleSoft, Red Hat OpenShift y el core legado.',
          'Emisión basada en colas con reintentos guiados por health check, para que las transacciones sobrevivan a caídas del core.',
          'Primer microservicio Quarkus (condiciones de producto) entregado, con CI/CD y quality gates de cobertura en SonarQube.',
        ],
        tags: ['Azure', 'MuleSoft', 'Quarkus', 'Java 21', 'Progress OpenEdge', 'Azure DevOps'],
      },
      {
        title: 'UAV autónomo con visión artificial y LoRa',
        period: 'Ago 2022 – Ene 2023 · Proyecto de titulación',
        summary:
          'Un dron construido desde cero que vuela a coordenadas elegidas en un mapa, esquiva obstáculos con visión artificial y reporta su ubicación cada segundo por LoRa, sin necesidad de Wi-Fi ni cobertura celular.',
        bullets: [
          'IA en el borde: un modelo YOLOv3-tiny preentrenado corre en una Raspberry Pi 4 a ~16 FPS y decide a bordo hacia dónde esquivar.',
          'Radio de largo alcance: módulos LoRa SX1276 a 915 MHz para comandos y telemetría, probados en el campus en un rango menor a 1 km.',
          'Lo más difícil: armar y configurar el dron desde cero, y mantener estables el GPS y el magnetómetro volando a 1.5 m.',
        ],
        tags: ['Python', 'Flask', 'YOLOv3-tiny', 'Raspberry Pi 4', 'LoRa SX1276', 'Pixhawk', 'MAVLink'],
        triangle: {
          nodes: [
            { title: 'Estación en tierra', lines: ['Laptop · WebApp en Flask', 'Mapa: eliges destino y despegas', 'LoRa SX1276 por USB'] },
            { title: 'Raspberry Pi 4', lines: ['Cámara + YOLOv3-tiny · ~16 FPS', 'Hilos en Python: ruta + visión', 'LoRa SX1276 por UART (GPIO)'] },
            { title: 'Pixhawk + dron', lines: ['GPS + barómetro + magnetómetro', 'Control de vuelo (ArduCopter)', 'Recibe comandos MAVLink'] },
          ],
          links: [
            { title: 'LoRa · 915 MHz', lines: ['encendido + coordenadas →', '← ubicación cada 1 s'] },
            { title: 'Serial UART · TELEM2', lines: ['TX · RX · GND común', 'MAVLink'] },
            { title: 'Sin enlace directo', lines: ['La posición GPS', 'llega vía la Pi'] },
          ],
        },
        details: {
          label: 'Cómo funciona',
          steps: [
            'En la estación en tierra, una WebApp en Flask muestra un mapa: eliges el destino e inicias el vuelo. La laptop envía la orden de encendido y las coordenadas por un módulo LoRa SX1276 conectado por USB.',
            'En el dron, otro módulo LoRa conectado al UART de los GPIO de la Raspberry Pi 4 las recibe. La Pi envía al Pixhawk las indicaciones de despegue y dirección por serial (TELEM2: TX, RX y GND común) usando MAVLink.',
            'Durante el vuelo, un hilo en Python mantiene la ruta mientras la cámara alimenta a YOLOv3-tiny. Si un objeto supera un rango de tamaño, el dron revisa qué lado de la imagen ocupa más y lo esquiva hacia el lado contrario; al terminar la maniobra, retoma la ruta.',
            'Cada segundo el dron envía su ubicación por LoRa, y la WebApp actualiza el mapa en tiempo real.',
          ],
        },
        gallery: [
          { src: '/images/uav/flight-test.webp', alt: 'Orlando, de espaldas, volando el dron sobre un campo de pasto', caption: 'Prueba de vuelo en el campus' },
          { src: '/images/uav/ground-station.webp', alt: 'El dron junto a una laptop con la WebApp de la estación en tierra y un mapa', caption: 'Estación en tierra: WebApp en Flask y el dron' },
          { src: '/images/uav/flight-log.webp', alt: 'Visor de logs de ArduCopter con la ruta de vuelo en un mapa y la gráfica de altura', caption: 'Log de vuelo: ruta y altura' },
          { src: '/images/uav/lora-range-field.webp', alt: 'Mapa satelital con una línea medida a lo largo del campo del campus', caption: 'Prueba de alcance LoRa en el campo' },
          { src: '/images/uav/lora-range-buildings.webp', alt: 'Mapa satelital con una línea medida entre edificios del campus', caption: 'Prueba de alcance LoRa entre edificios' },
        ],
      },
      {
        title: 'orlandomyjourney.dev',
        period: '2026',
        summary: 'Este sitio: una app Angular prerenderizada a HTML estático, bilingüe y desplegada en Netlify con despliegue continuo desde GitHub.',
        bullets: ['Temas Dracula y Alucard, rutas en inglés y español, y un CV que se actualiza con cada push.'],
        tags: ['Angular', 'TypeScript', 'Netlify'],
        link: { label: 'Ver código', url: PROFILE.links.repo },
      },
    ],
  },
  stack: {
    file: 'stack.json',
    title: 'Stack tecnológico',
    groups: [
      {
        name: 'Cloud y arquitectura',
        items: ['Azure Functions', 'Logic Apps', 'Service Bus', 'Key Vault', 'Static Web Apps', 'Diseño API-led', 'Diseño orientado a eventos', 'Idempotencia y resiliencia'],
      },
      { name: 'Integración y APIs', items: ['MuleSoft API Manager', 'REST', 'SOAP', 'OAuth 2.0', 'Swagger / OpenAPI'] },
      {
        name: 'Lenguajes y frameworks',
        items: ['Java 21 · Quarkus', 'Python · FastAPI', 'Progress OpenEdge (ABL)', 'TypeScript', 'Angular', 'Node.js / Express', 'C / C++'],
      },
      { name: 'Datos', items: ['Azure SQL', 'PostgreSQL', 'SQL', 'MongoDB'] },
      { name: 'DevOps y herramientas', items: ['Azure DevOps', 'SonarQube', 'Git / GitHub', 'Docker', 'Red Hat OpenShift', 'Linux / UNIX', 'Jira'] },
      { name: 'Liderazgo', items: ['Liderazgo técnico', 'Estimación y roadmap', 'Reporte a stakeholders', 'Mentoría', 'Scrum'] },
    ],
  },
  talks: {
    file: 'talks.md',
    title: 'Charlas y comunidad',
    intro: 'Disfruto compartir lo que aprendo en escenarios y talleres. Actualmente estoy retomando la creación de contenido de forma constante.',
    topicsTitle: 'Temas de los que me encanta hablar',
    topics: [
      'Cloud computing con Azure (y ahora explorando AWS)',
      'Migrar sistemas legados a nuevas tecnologías sin impactar la operación',
      'Elegir la estrategia de arquitectura según lo que necesita el negocio',
      'Patrones de resiliencia: colas, reintentos e idempotencia',
    ],
    items: [
      {
        year: '2022',
        title: 'Despliega apps web con Azure Static Web Apps',
        event: 'Jalisco Talent Land 2022 · Speaker',
        description: 'Una sesión práctica para llevar una app full-stack de GitHub a Azure en minutos.',
      },
      {
        year: '2022',
        title: 'Mentor del track de Microsoft',
        event: 'Talent Hackathon y BBVA Hackathon 2022',
        description: 'Ayudé a los equipos a diseñar y desplegar sus soluciones en Azure durante el hackathon.',
      },
      {
        year: '2021 – 2024',
        title: 'Talleres y Tech Week UPIITA',
        event: 'Microsoft Learn Student Ambassadors',
        description: 'Enseñé a más de 70 personas a desplegar en Azure y organicé eventos con más de 500 asistentes de más de 6 países.',
      },
    ],
    photoAlt: 'Orlando dando una charla en el escenario de un evento de Microsoft',
  },
  writing: {
    file: 'writing/',
    title: 'Artículos',
    intro: 'Lo que aprendo sobre arquitectura y modernización, compartido en LinkedIn. Sin detalles de la empresa: solo las decisiones y por qué importan.',
    readMore: 'Leer en LinkedIn',
    prev: 'Post anterior',
    next: 'Siguiente post',
    allPosts: 'Ver todas mis publicaciones',
    posts: [
      {
        title: 'Tech Lead hoy, arquitecto de soluciones en camino',
        summary:
          'Después de "Software Architecture: From Developer to Architect": el cambio empieza cuando dejas de preguntar cómo funciona una herramienta y preguntas cómo se comunican los componentes y si cumplen lo que el negocio necesita.',
        points: [
          'Una base sólida de desarrollo da criterio para evaluar microservicios, serverless, API management o IA, en lugar de seguir la moda.',
          'Una solución no está terminada hasta que Ops pueda desplegarla, escalarla y operarla en la infraestructura existente.',
          'Ser mentor de los devs y hacer POCs con tecnología nueva es parte del trabajo.',
        ],
        tags: ['Certificación', 'Arquitectura de soluciones'],
        url: 'https://lnkd.in/p/gHRCkpz2',
      },
      {
        title: 'Mi primer sistema distribuido tenía hélices',
        summary:
          'Mi proyecto de titulación: un dron autónomo que volaba a un punto en un mapa, esquivaba obstáculos y reportaba su ubicación cada segundo, sin Wi-Fi ni cobertura celular.',
        points: [
          'Un triángulo: estación en tierra en Flask, Raspberry Pi 4 con YOLOv3-tiny y un controlador de vuelo Pixhawk.',
          'LoRa SX1276 a 915 MHz para la misión y la telemetría; serial en TELEM2 con MAVLink hacia el Pixhawk.',
          'Lección para la nube: diseñar para enlaces poco confiables y decidir en el borde.',
        ],
        tags: ['Drones', 'Visión artificial', 'LoRa'],
        url: 'https://lnkd.in/p/gvgQmDJ9',
      },
      {
        title: 'Software Architecture Foundations: empieza por las personas',
        summary:
          'Lo que más me quedó del curso no fue un diagrama: refinar una historia de usuario entre analistas y desarrolladores crea un contrato compartido, muy parecido a la mentalidad API-led.',
        points: [
          'Monolito, microkernel, microservicios, mensajería, reactiva: patrones que empiezas a ver en proyectos reales.',
          'Plataformas legadas como Progress OpenEdge suelen ser monolitos, y funcionan.',
          'Envolverlas con APIs y mensajería es mejor que una reescritura riesgosa.',
        ],
        tags: ['Certificación', 'Arquitectura de software'],
        url: 'https://lnkd.in/p/gH6X3a7Q',
      },
      {
        title: 'Mensajería + orquestación: desacoplar sin perder solicitudes',
        summary: 'Los sistemas no se llaman directamente: hablan a través de un broker, y un orquestador coordina el trabajo.',
        points: [
          'Una Azure Function encola en Service Bus; los suscriptores procesan cuando están listos.',
          'La entrega es "al menos una vez", así que los consumidores deben ser idempotentes.',
          'Orquestación fan-out/fan-in: la respuesta depende solo del servicio crítico.',
        ],
        tags: ['Mensajería', 'Azure', 'Resiliencia'],
        url: 'https://lnkd.in/p/ge3GrCbh',
      },
    ],
  },
  roadmap: {
    file: 'roadmap.md',
    title: 'Próximo destino',
    intro: 'Hacia dónde va este viaje: convertirme en Arquitecto de Soluciones de Software y en un líder técnico que ayude a los equipos a modernizarse con confianza.',
    status: { done: 'Logrado', progress: 'En curso', next: 'Siguiente' },
    goals: [
      { status: 'done', title: 'AZ-900 y Software Architecture Foundations', text: 'Certificado. También Software Architecture: From Developer to Architect, Scrum Fundamentals (SFC) y Git y GitHub.' },
      { status: 'done', title: 'Gold Microsoft Learn Student Ambassador', text: 'Tres años enseñando y organizando comunidades de cloud.' },
      { status: 'done', title: 'Tech Lead', text: 'Liderando un equipo de modernización multiplataforma desde junio de 2026.' },
      { status: 'progress', title: 'Azure Solutions Architect Expert (AZ-305)', text: 'Preparando la certificación para formalizar la práctica de arquitectura.' },
      { status: 'progress', title: 'Expandirme a AWS', text: 'Aprendiendo AWS para diseñar estrategias multinube con la herramienta adecuada para cada caso.' },
      { status: 'progress', title: 'Retomar la creación de contenido', text: 'Una serie semanal sobre decisiones de arquitectura, resiliencia y liderazgo técnico.' },
      { status: 'next', title: 'Arquitecto de Soluciones de Software', text: 'Diseñar estrategias de arquitectura alineadas a cada negocio y liderar su adopción.' },
    ],
  },
  contact: {
    file: 'contact.sh',
    title: 'Hablemos',
    text: 'Abierto a conversar sobre modernización de legados, arquitectura de integración y soluciones cloud. También me encanta participar en meetups y eventos de comunidad.',
    emailLabel: 'Envíame un correo',
  },
  footer: { built: 'Hecho con Angular y desplegado en Netlify.', source: 'Código fuente' },
};

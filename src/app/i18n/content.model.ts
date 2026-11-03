export type Lang = 'en' | 'es';

export interface Link {
  label: string;
  url: string;
}

export interface SectionHead {
  /** File-like label shown in the editor tab and above the title. */
  file: string;
  title: string;
  intro?: string;
}

export interface JourneyStop {
  date: string;
  title: string;
  org: string;
  description: string;
  tags: string[];
  /** Marks the current position on the journey. */
  current?: boolean;
  /** Marks a future destination (rendered as a dashed stop). */
  upcoming?: boolean;
}

export interface Project {
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
  link?: Link;
  /** Optional three-node architecture diagram. */
  triangle?: TriangleDiagram;
  /** Optional step-by-step explanation shown in an expandable panel. */
  details?: { label: string; steps: string[] };
  gallery?: Photo[];
}

export interface DiagramItem {
  title: string;
  lines: string[];
}

export interface TriangleDiagram {
  /** Top-left, top-right and bottom nodes. */
  nodes: [DiagramItem, DiagramItem, DiagramItem];
  /** Top link (0 ↔ 1), right link (1 ↔ 2) and the dashed left side (0 … 2, no direct link). */
  links: [DiagramItem, DiagramItem, DiagramItem];
}

export interface Photo {
  src: string;
  alt: string;
  caption: string;
}

export interface Talk {
  year: string;
  title: string;
  event: string;
  description: string;
}

export interface Post {
  title: string;
  summary: string;
  points: string[];
  tags: string[];
  url: string;
}

export type GoalStatus = 'done' | 'progress' | 'next';

export interface Goal {
  status: GoalStatus;
  title: string;
  text: string;
}

export interface Content {
  meta: { title: string; description: string };
  nav: {
    about: string;
    journey: string;
    architecture: string;
    work: string;
    talks: string;
    writing: string;
    roadmap: string;
    contact: string;
    downloadCv: string;
    themeToDark: string;
    themeToLight: string;
    switchLang: string;
    menu: string;
  };
  hero: {
    greeting: string;
    headline: string[];
    tagline: string;
    roles: string[];
    code: { role: string; focus: string[]; stack: string[]; learning: string[]; nextStop: string };
    ctaCv: string;
    ctaContact: string;
    location: string;
    photoAlt: string;
    scroll: string;
  };
  about: SectionHead & {
    lead: string;
    paragraphs: string[];
    motto: string;
    stats: { value: string; label: string }[];
  };
  journey: SectionHead & { stops: JourneyStop[] };
  architecture: SectionHead & {
    disclaimer: string;
    zones: { internet: string; mulesoft: string; azure: string; openshift: string; legacy: string };
    layers: {
      channels: string;
      channelsSub: string;
      experience: string;
      experienceSub: string;
      process: string;
      processSub: string;
      logicApps: string;
      logicAppsSub: string;
      functions: string;
      functionsSub: string;
      quarkus: string;
      quarkusSub: string;
      serviceBus: string;
      serviceBusSub: string;
      data: string;
      dataSub: string;
      system: string;
      systemSub: string;
      core: string;
      coreSub: string;
      engines: string;
      enginesSub: string;
      auxiliary: string;
      auxiliarySub: string;
    };
    principlesTitle: string;
    principles: { title: string; text: string }[];
  };
  work: SectionHead & { projects: Project[] };
  stack: SectionHead & { groups: { name: string; items: string[] }[] };
  talks: SectionHead & {
    topicsTitle: string;
    topics: string[];
    items: Talk[];
    photoAlt: string;
  };
  writing: SectionHead & { posts: Post[]; readMore: string; allPosts: string; prev: string; next: string };
  roadmap: SectionHead & { status: Record<GoalStatus, string>; goals: Goal[] };
  contact: SectionHead & { text: string; emailLabel: string };
  footer: { built: string; source: string };
}

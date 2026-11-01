import { Content } from '../i18n/content.model';

export type NavKey = Exclude<keyof Content['nav'], 'downloadCv' | 'themeToDark' | 'themeToLight' | 'switchLang' | 'menu'>;

/** Sections shown as editor tabs, in page order. The id matches the <section> id. */
export const NAV_ITEMS: { id: string; key: NavKey; color: string }[] = [
  { id: 'about', key: 'about', color: 'var(--blue)' },
  { id: 'journey', key: 'journey', color: 'var(--orange)' },
  { id: 'architecture', key: 'architecture', color: 'var(--pink)' },
  { id: 'work', key: 'work', color: 'var(--yellow)' },
  { id: 'talks', key: 'talks', color: 'var(--blue)' },
  { id: 'writing', key: 'writing', color: 'var(--yellow)' },
  { id: 'roadmap', key: 'roadmap', color: 'var(--blue)' },
  { id: 'contact', key: 'contact', color: 'var(--green)' },
];

import { computed, DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ES } from '../i18n/content.es';
import { EN } from '../i18n/content.en';
import { Content, Lang } from '../i18n/content.model';
import { PROFILE } from '../i18n/profile';

const CONTENT: Record<Lang, Content> = { en: EN, es: ES };

/** Route of each language. English lives at the root, Spanish under /es. */
export const LANG_PATH: Record<Lang, string> = { en: '/', es: '/es' };

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly lang = signal<Lang>('en');
  readonly t = computed(() => CONTENT[this.lang()]);
  readonly otherLang = computed<Lang>(() => (this.lang() === 'en' ? 'es' : 'en'));

  use(lang: Lang): void {
    this.lang.set(lang);
    this.applySeo();
  }

  /** Updates <html lang>, title, description, Open Graph and hreflang tags (also during prerender). */
  private applySeo(): void {
    const { title, description } = this.t().meta;
    const lang = this.lang();
    const url = PROFILE.siteUrl + (lang === 'en' ? '/' : '/es/');

    this.doc.documentElement.lang = lang;
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:locale', content: lang === 'en' ? 'en_US' : 'es_MX' });

    this.setLink('canonical', url);
    this.setLink('alternate', PROFILE.siteUrl + '/', 'en');
    this.setLink('alternate', PROFILE.siteUrl + '/es/', 'es');
    this.setLink('alternate', PROFILE.siteUrl + '/', 'x-default');
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
    let link = this.doc.head.querySelector<HTMLLinkElement>(selector);
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = rel;
      if (hreflang) link.hreflang = hreflang;
      this.doc.head.appendChild(link);
    }
    link.href = href;
  }
}

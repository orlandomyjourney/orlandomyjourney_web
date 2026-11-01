import { DOCUMENT, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly theme = signal<Theme>('dark');

  constructor() {
    if (!this.isBrowser) return;
    // index.html already applied a saved theme; otherwise follow the system preference.
    const saved = this.doc.documentElement.getAttribute('data-theme');
    const prefersLight = this.doc.defaultView?.matchMedia('(prefers-color-scheme: light)').matches;
    this.theme.set(saved === 'light' || saved === 'dark' ? saved : prefersLight ? 'light' : 'dark');
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.doc.documentElement.setAttribute('data-theme', next);
    this.doc.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#282a36' : '#fffbeb');
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be blocked (private mode); the theme still applies for this visit.
    }
  }
}

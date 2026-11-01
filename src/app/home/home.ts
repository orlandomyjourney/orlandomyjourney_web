import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../core/language.service';
import { Lang } from '../i18n/content.model';
import { StatusBar } from '../layout/status-bar/status-bar';
import { TopBar } from '../layout/top-bar/top-bar';
import { About } from '../sections/about';
import { Architecture } from '../sections/architecture';
import { Contact } from '../sections/contact';
import { Hero } from '../sections/hero';
import { Journey } from '../sections/journey';
import { Roadmap } from '../sections/roadmap';
import { Stack } from '../sections/stack';
import { Talks } from '../sections/talks';
import { Work } from '../sections/work';
import { Writing } from '../sections/writing';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TopBar, StatusBar, Hero, About, Journey, Architecture, Work, Stack, Talks, Writing, Roadmap, Contact],
  template: `
    <app-top-bar [active]="active()" />
    <main>
      <app-hero />
      <app-about />
      <app-journey />
      <app-architecture />
      <app-work />
      <app-stack />
      <app-talks />
      <app-writing />
      <app-roadmap />
      <app-contact />
    </main>
    <app-status-bar [active]="active()" />
  `,
  styles: `
    main {
      padding-top: var(--header-h);
      padding-bottom: var(--status-h);
    }
  `,
})
export class Home {
  /** Id of the section currently in the middle of the viewport. */
  protected readonly active = signal('top');

  constructor() {
    inject(LanguageService).use(inject(ActivatedRoute).snapshot.data['lang'] as Lang);

    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.active.set(entry.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      host.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}

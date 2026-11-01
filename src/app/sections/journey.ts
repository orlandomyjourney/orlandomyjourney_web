import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { RevealDirective } from '../shared/reveal.directive';

/** Decorative short "commit" ids for each stop. */
const HASHES = ['3a1f9c2', '7be04d1', 'c41e8a7', '9d02f6b', '51ac7e3', 'e8b3d90', '2f7c1a4', 'a6d95e0', 'f00d5ea'];

@Component({
  selector: 'app-journey',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    @let c = i18n.t().journey;
    <section id="journey" class="section section--alt">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow"><b>02</b> · {{ c.file }}</p>
          <h2 class="section-title">{{ c.title }}</h2>
          <p class="section-intro">{{ c.intro }}</p>
        </header>

        <ol class="timeline" #timeline [style.--progress]="progress()">
          @for (stop of c.stops; track stop.title; let i = $index) {
            <li class="stop" [class.stop--current]="stop.current" [class.stop--upcoming]="stop.upcoming" appReveal>
              <span class="node" aria-hidden="true"></span>
              <article class="card">
                <p class="commit mono">
                  <span class="tk-kw">commit</span> <span class="tk-str">{{ hashes[i] }}</span>
                  @if (stop.current) {
                    <span class="head">(HEAD → main)</span>
                  }
                  @if (stop.upcoming) {
                    <span class="head head--next">(origin/next)</span>
                  }
                </p>
                <p class="date mono">{{ stop.date }}</p>
                <h3>{{ stop.title }}</h3>
                <p class="org">{{ stop.org }}</p>
                <p class="desc">{{ stop.description }}</p>
                <div class="chips">
                  @for (tag of stop.tags; track tag) {
                    <span class="chip">{{ tag }}</span>
                  }
                </div>
              </article>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .timeline {
      --rail: 20px;
      position: relative;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .timeline::before,
    .timeline::after {
      content: '';
      position: absolute;
      top: 0;
      left: var(--rail);
      width: 3px;
      margin-left: -1.5px;
      border-radius: 3px;
    }
    .timeline::before {
      bottom: 0;
      background: var(--line);
    }
    /* The rail fills up as the reader scrolls through the journey. */
    .timeline::after {
      height: calc(var(--progress, 0) * 100%);
      background: linear-gradient(var(--purple), var(--blue), var(--cyan));
      box-shadow: 0 0 14px var(--glow);
    }
    .stop {
      position: relative;
      padding-left: calc(var(--rail) + 32px);
      margin-bottom: 28px;
    }
    .node {
      position: absolute;
      left: var(--rail);
      top: 28px;
      z-index: 1;
      width: 16px;
      height: 16px;
      margin-left: -8px;
      border-radius: 50%;
      background: var(--bg-deep);
      border: 3px solid var(--blue);
    }
    .stop--current .node {
      background: var(--green);
      border-color: var(--green);
      box-shadow: 0 0 0 6px color-mix(in srgb, var(--green) 25%, transparent);
      animation: pulse 2s ease-in-out infinite;
    }
    .stop--upcoming .node {
      border-style: dashed;
      border-color: var(--pink);
    }
    .stop--current .card {
      border-color: var(--green);
    }
    .stop--upcoming .card {
      border-style: dashed;
      border-color: var(--pink);
      background: transparent;
    }
    @keyframes pulse {
      50% {
        box-shadow: 0 0 0 11px color-mix(in srgb, var(--green) 8%, transparent);
      }
    }
    .commit {
      font-size: 0.78rem;
      margin-bottom: 10px;
    }
    .commit .tk-str {
      margin-left: 0.6ch;
    }
    .head {
      color: var(--green);
      margin-left: 6px;
    }
    .head--next {
      color: var(--pink);
    }
    .date {
      font-size: 0.85rem;
      color: var(--orange);
    }
    h3 {
      margin-top: 4px;
      font-size: 1.3rem;
    }
    .org {
      color: var(--accent);
      font-weight: 500;
      margin-top: 4px;
    }
    .desc {
      color: var(--muted);
      margin: 12px 0 16px;
    }
    @media (min-width: 900px) {
      .timeline {
        --rail: 50%;
      }
      .stop {
        width: 50%;
        padding-left: 0;
        padding-right: 48px;
        margin-bottom: -40px;
      }
      .stop:nth-child(even) {
        margin-left: 50%;
        padding-right: 0;
        padding-left: 48px;
      }
      .stop:last-child {
        margin-bottom: 0;
      }
      .node {
        left: auto;
        right: 0;
        margin: 0 -8px 0 0;
      }
      .stop:nth-child(even) .node {
        left: 0;
        right: auto;
        margin: 0 0 0 -8px;
      }
    }
  `,
})
export class Journey {
  protected readonly i18n = inject(LanguageService);
  protected readonly hashes = HASHES;
  protected readonly progress = signal(0);
  private readonly timeline = viewChild.required<ElementRef<HTMLElement>>('timeline');

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      let frame = 0;
      const update = () => {
        frame = 0;
        const rect = this.timeline().nativeElement.getBoundingClientRect();
        const anchor = window.innerHeight * 0.6;
        const ratio = (anchor - rect.top) / rect.height;
        this.progress.set(Math.min(1, Math.max(0, ratio)));
      };
      const onScroll = () => (frame ||= requestAnimationFrame(update));
      window.addEventListener('scroll', onScroll, { passive: true });
      update();
      destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
        cancelAnimationFrame(frame);
      });
    });
  }
}

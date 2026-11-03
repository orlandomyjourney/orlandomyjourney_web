import { afterNextRender, ChangeDetectionStrategy, Component, computed, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { PROFILE } from '../i18n/profile';
import { Icon } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';

/** Posts in a horizontal carousel: scroll-snap for touch, buttons and dots for mouse and keyboard. */
@Component({
  selector: 'app-writing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, Icon],
  template: `
    @let c = i18n.t().writing;
    <section id="writing" class="section section--alt">
      <div class="container">
        <header class="head">
          <div class="section-head" appReveal>
            <p class="eyebrow"><b>07</b> · {{ c.file }}</p>
            <h2 class="section-title">{{ c.title }}</h2>
            <p class="section-intro">{{ c.intro }}</p>
          </div>
          <div class="nav" appReveal>
            <span class="counter mono">{{ pad(active() + 1) }} / {{ pad(c.posts.length) }}</span>
            <button type="button" class="arrow arrow--prev" (click)="go(active() - 1)" [disabled]="atStart()" [attr.aria-label]="c.prev">
              <app-icon name="arrow" />
            </button>
            <button type="button" class="arrow" (click)="go(active() + 1)" [disabled]="atEnd()" [attr.aria-label]="c.next">
              <app-icon name="arrow" />
            </button>
          </div>
        </header>

        <div
          class="track"
          #track
          tabindex="0"
          role="region"
          aria-roledescription="carousel"
          [attr.aria-label]="c.title"
          (scroll)="onScroll()"
          appReveal
        >
          @for (post of c.posts; track post.title; let i = $index) {
            <article class="card post" [attr.aria-label]="i + 1 + ' / ' + c.posts.length">
              <p class="file mono">{{ slug(post.title) }}.md</p>
              <h3>{{ post.title }}</h3>
              <p class="summary">{{ post.summary }}</p>
              <ul>
                @for (point of post.points; track point) {
                  <li>{{ point }}</li>
                }
              </ul>
              <div class="chips">
                @for (tag of post.tags; track tag) {
                  <span class="chip">#{{ tag }}</span>
                }
              </div>
              <a class="read" [href]="post.url" target="_blank" rel="noopener">{{ c.readMore }} <app-icon name="external" /></a>
            </article>
          }
        </div>

        <div class="dots" aria-hidden="true">
          @for (post of c.posts; track post.title; let i = $index) {
            <button type="button" tabindex="-1" class="dot" [class.dot--active]="i === active()" (click)="go(i)"></button>
          }
        </div>

        <p class="all" appReveal>
          <a class="btn btn--ghost" [href]="profile.links.linkedinActivity" target="_blank" rel="noopener">
            <app-icon name="linkedin" /> {{ c.allPosts }}
          </a>
        </p>
      </div>
    </section>
  `,
  styles: `
    .head {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: space-between;
      gap: 16px 32px;
      margin-bottom: 40px;
    }
    .head .section-head {
      margin-bottom: 0;
    }
    .nav {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .counter {
      font-size: 0.85rem;
      color: var(--comment);
      margin-right: 6px;
    }
    .arrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 1px solid var(--line);
      background: var(--surface);
      color: var(--fg);
      font-size: 18px;
      cursor: pointer;
      transition:
        border-color 0.2s ease,
        color 0.2s ease,
        opacity 0.2s ease;
    }
    .arrow:hover:not(:disabled) {
      border-color: var(--accent);
      color: var(--accent);
    }
    .arrow:disabled {
      opacity: 0.35;
      cursor: default;
    }
    .arrow--prev app-icon {
      transform: scaleX(-1);
    }
    .track {
      position: relative;
      --per-view: 1.15;
      --gap: 20px;
      display: flex;
      gap: var(--gap);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      scrollbar-width: none;
      padding: 4px 2px 8px;
      border-radius: var(--radius);
    }
    .track::-webkit-scrollbar {
      display: none;
    }
    @media (min-width: 720px) {
      .track {
        --per-view: 2;
      }
    }
    @media (min-width: 1040px) {
      .track {
        --per-view: 3;
      }
    }
    .post {
      flex: 0 0 calc((100% - (var(--per-view) - 1) * var(--gap)) / var(--per-view));
      scroll-snap-align: start;
      display: flex;
      flex-direction: column;
      padding: 26px;
    }
    .post:hover {
      border-color: var(--accent);
    }
    .file {
      font-size: 0.78rem;
      color: var(--comment);
      overflow-wrap: anywhere;
    }
    h3 {
      font-size: 1.3rem;
      margin: 8px 0 10px;
    }
    .summary {
      color: var(--muted);
      font-size: 0.95rem;
    }
    ul {
      margin: 16px 0 20px;
      display: grid;
      gap: 8px;
    }
    li {
      position: relative;
      padding-left: 20px;
      font-size: 0.9rem;
    }
    li::before {
      content: '•';
      position: absolute;
      left: 4px;
      color: var(--purple);
    }
    .chips {
      margin-top: auto;
    }
    .read {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 18px;
      font-weight: 600;
      font-size: 0.92rem;
    }
    .dots {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-top: 20px;
    }
    .dot {
      width: 8px;
      height: 8px;
      padding: 0;
      border: 0;
      border-radius: 999px;
      background: var(--line);
      cursor: pointer;
      transition:
        width 0.25s ease,
        background-color 0.25s ease;
    }
    .dot--active {
      width: 24px;
      background: var(--accent);
    }
    .all {
      margin-top: 32px;
      text-align: center;
    }
  `,
})
export class Writing {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = PROFILE;

  /** Index of the first post visible in the carousel. */
  protected readonly active = signal(0);
  /** How many posts fit in the visible area at once (from the CSS breakpoints). */
  private readonly perView = signal(1);
  protected readonly atStart = computed(() => this.active() === 0);
  protected readonly atEnd = computed(() => this.active() >= this.i18n.t().writing.posts.length - this.perView());

  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const measure = () => this.update();
      window.addEventListener('resize', measure, { passive: true });
      measure();
      destroyRef.onDestroy(() => window.removeEventListener('resize', measure));
    });
  }

  protected onScroll(): void {
    this.update();
  }

  protected go(index: number): void {
    const track = this.track().nativeElement;
    const cards = track.children;
    const last = Math.max(0, cards.length - this.perView());
    const target = cards[Math.min(Math.max(index, 0), last)] as HTMLElement | undefined;
    const first = cards[0] as HTMLElement | undefined;
    if (target && first) track.scrollTo({ left: target.offsetLeft - first.offsetLeft });
  }

  protected pad(n: number): string {
    return String(n).padStart(2, '0');
  }

  protected slug(title: string): string {
    return title
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  private update(): void {
    const track = this.track().nativeElement;
    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = first.offsetWidth + gap;
    // n cards take n * step - gap pixels, so add the gap back before dividing.
    this.perView.set(Math.max(1, Math.floor((track.clientWidth + gap + 1) / step)));
    // At the far right the last cards are all visible: report the last reachable start index.
    const atRightEdge = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    const index = atRightEdge ? track.children.length - this.perView() : Math.round(track.scrollLeft / step);
    this.active.set(Math.max(0, index));
  }
}

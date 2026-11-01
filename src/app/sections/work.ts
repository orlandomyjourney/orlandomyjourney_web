import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { Icon } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';
import { TriangleDiagramView } from '../shared/triangle-diagram';

@Component({
  selector: 'app-work',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, Icon, TriangleDiagramView],
  template: `
    @let c = i18n.t().work;
    <section id="work" class="section section--alt">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow"><b>04</b> · {{ c.file }}</p>
          <h2 class="section-title">{{ c.title }}</h2>
        </header>

        <div class="grid">
          @for (p of c.projects; track p.title; let first = $first) {
            <article class="card project" [class.project--featured]="first || !!p.triangle" appReveal>
              <p class="period mono">{{ p.period }}</p>
              <h3>{{ p.title }}</h3>
              <p class="summary">{{ p.summary }}</p>
              <ul class="bullets">
                @for (b of p.bullets; track b) {
                  <li>{{ b }}</li>
                }
              </ul>
              @if (p.triangle) {
                <app-triangle-diagram class="diagram" [diagram]="p.triangle" />
              }
              @if (p.details) {
                <details class="details">
                  <summary class="mono">{{ p.details.label }}</summary>
                  <ol>
                    @for (step of p.details.steps; track $index) {
                      <li>{{ step }}</li>
                    }
                  </ol>
                </details>
              }
              @if (p.gallery) {
                <div class="gallery">
                  @for (photo of p.gallery; track photo.src) {
                    <a class="photo" [href]="photo.src" target="_blank" rel="noopener">
                      <img [src]="photo.src" [alt]="photo.alt" loading="lazy" />
                      <span class="caption">{{ photo.caption }}</span>
                    </a>
                  }
                </div>
              }
              <div class="chips">
                @for (tag of p.tags; track tag) {
                  <span class="chip">{{ tag }}</span>
                }
              </div>
              @if (p.link) {
                <a class="more" [href]="p.link.url" target="_blank" rel="noopener">{{ p.link.label }} <app-icon name="external" /></a>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      gap: 20px;
    }
    .project {
      display: flex;
      flex-direction: column;
      padding: 28px;
    }
    .project--featured {
      background:
        radial-gradient(circle at 100% 0%, color-mix(in srgb, var(--purple) 16%, transparent), transparent 55%),
        var(--surface);
    }
    .project--featured h3 {
      font-size: clamp(1.4rem, 3vw, 1.9rem);
    }
    .period {
      font-size: 0.8rem;
      color: var(--orange);
    }
    h3 {
      font-size: 1.3rem;
      margin: 6px 0 10px;
    }
    .summary {
      color: var(--muted);
    }
    .bullets {
      margin: 16px 0 20px;
      display: grid;
      gap: 8px;
    }
    .bullets li {
      position: relative;
      padding-left: 22px;
      font-size: 0.94rem;
    }
    .bullets li::before {
      content: '›';
      position: absolute;
      left: 4px;
      color: var(--green);
      font-weight: 700;
    }
    .chips {
      margin-top: auto;
    }
    .diagram {
      margin-bottom: 20px;
    }
    .gallery {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 150px;
      gap: 10px;
      margin-bottom: 20px;
    }
    @media (min-width: 820px) {
      .gallery {
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 170px;
      }
    }
    /* Portrait photos take two rows; the wide flight log takes two columns. */
    .photo:nth-child(1),
    .photo:nth-child(2) {
      grid-row: span 2;
    }
    .photo:nth-child(3) {
      grid-column: span 2;
    }
    .photo {
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      border: 1px solid var(--line);
    }
    .photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
    }
    .photo:hover img {
      transform: scale(1.04);
    }
    .caption {
      position: absolute;
      inset: auto 0 0;
      padding: 22px 10px 8px;
      background: linear-gradient(transparent, rgb(25 26 33 / 88%));
      color: #f8f8f2;
      font-size: 0.78rem;
      line-height: 1.3;
    }
    .details {
      margin-bottom: 20px;
      border: 1px solid var(--line);
      border-radius: 10px;
      background: var(--bg-deep);
    }
    .details summary {
      cursor: pointer;
      padding: 12px 16px;
      font-size: 0.88rem;
      color: var(--accent);
    }
    .details ol {
      margin: 0;
      padding: 0 20px 16px 38px;
      display: grid;
      gap: 10px;
      font-size: 0.93rem;
      color: var(--muted);
    }
    .more {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 18px;
      font-weight: 600;
      font-size: 0.92rem;
    }
  `,
})
export class Work {
  protected readonly i18n = inject(LanguageService);
}

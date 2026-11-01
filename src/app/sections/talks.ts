import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { PROFILE } from '../i18n/profile';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-talks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    @let c = i18n.t().talks;
    <section id="talks" class="section">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow"><b>06</b> · {{ c.file }}</p>
          <h2 class="section-title">{{ c.title }}</h2>
          <p class="section-intro">{{ c.intro }}</p>
        </header>

        <div class="gallery">
          <figure class="shot shot--main" appReveal>
            <img [src]="profile.talkPhoto" [alt]="c.photoAlt" loading="lazy" width="1400" height="789" />
          </figure>
        </div>

        <div class="split">
          <ol class="talks">
            @for (t of c.items; track t.title; let i = $index) {
              <li class="talk" appReveal [revealDelay]="i * 80">
                <span class="year mono">{{ t.year }}</span>
                <div>
                  <h3>{{ t.title }}</h3>
                  <p class="event">{{ t.event }}</p>
                  <p class="desc">{{ t.description }}</p>
                </div>
              </li>
            }
          </ol>

          <aside class="card topics" appReveal>
            <h3 class="mono"><span class="tk-com">## </span>{{ c.topicsTitle }}</h3>
            <ul>
              @for (topic of c.topics; track topic) {
                <li>{{ topic }}</li>
              }
            </ul>
          </aside>
        </div>
      </div>
    </section>
  `,
  styles: `
    .gallery {
      display: grid;
      gap: 16px;
      margin-bottom: 64px;
    }
    .shot {
      margin: 0;
      border-radius: 22px;
      overflow: hidden;
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
    }
    .shot img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
    }
    .shot:hover img {
      transform: scale(1.03);
    }
    .split {
      display: grid;
      gap: 40px;
    }
    @media (min-width: 960px) {
      .split {
        grid-template-columns: 1.4fr 1fr;
        align-items: start;
      }
    }
    .talks {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .talk {
      display: grid;
      grid-template-columns: 96px 1fr;
      gap: 16px;
      padding: 22px 0;
      border-bottom: 1px solid var(--line);
    }
    .talk:first-child {
      padding-top: 0;
    }
    .year {
      font-size: 0.85rem;
      color: var(--orange);
      padding-top: 4px;
    }
    h3 {
      font-size: 1.15rem;
    }
    .event {
      color: var(--accent);
      font-weight: 500;
      font-size: 0.94rem;
      margin-top: 4px;
    }
    .desc {
      color: var(--muted);
      font-size: 0.94rem;
      margin-top: 8px;
    }
    .topics h3 {
      font-size: 0.95rem;
      font-weight: 500;
      margin-bottom: 14px;
    }
    .topics ul {
      display: grid;
      gap: 12px;
    }
    .topics li {
      position: relative;
      padding-left: 22px;
      font-size: 0.95rem;
    }
    .topics li::before {
      content: '-';
      position: absolute;
      left: 4px;
      color: var(--pink);
      font-family: var(--font-mono);
    }
  `,
})
export class Talks {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = PROFILE;
}

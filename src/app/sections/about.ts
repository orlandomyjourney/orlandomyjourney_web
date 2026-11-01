import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    @let c = i18n.t().about;
    <section id="about" class="section">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow"><b>01</b> · {{ c.file }}</p>
          <h2 class="section-title">{{ c.title }}</h2>
        </header>

        <div class="grid">
          <div class="text">
            <p class="lead" appReveal>{{ c.lead }}</p>
            @for (p of c.paragraphs; track $index) {
              <p class="para" appReveal>{{ p }}</p>
            }
          </div>

          <aside class="side">
            <figure class="motto" appReveal>
              <span class="mono tk-com"># motto</span>
              <blockquote class="neon">{{ c.motto }}</blockquote>
            </figure>
            <dl class="stats">
              @for (s of c.stats; track s.label; let i = $index) {
                <div class="stat card" appReveal [revealDelay]="i * 90">
                  <dt>{{ s.label }}</dt>
                  <dd>{{ s.value }}</dd>
                </div>
              }
            </dl>
          </aside>
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      gap: 48px;
    }
    @media (min-width: 960px) {
      .grid {
        grid-template-columns: 1.3fr 1fr;
        gap: 72px;
      }
    }
    .lead {
      font-size: clamp(1.35rem, 2.6vw, 1.75rem);
      font-weight: 600;
      line-height: 1.4;
      letter-spacing: -0.015em;
      margin-bottom: 28px;
    }
    .para {
      color: var(--muted);
      margin-bottom: 18px;
    }
    .motto {
      margin: 0 0 20px;
      padding: 22px 24px 30px;
      border-radius: var(--radius);
      border: 1px solid var(--line);
      background: #191a21;
      overflow: hidden;
    }
    .motto .tk-com {
      font-size: 0.8rem;
      color: #8590c8;
    }
    .neon {
      margin: 10px 0 0;
      font-family: 'Dancing Script', cursive;
      font-weight: 700;
      font-size: clamp(2.3rem, 5vw, 3rem);
      line-height: 1.1;
      color: #e6fbff;
      text-shadow:
        0 0 4px #8be9fd,
        0 0 12px #8be9fd,
        0 0 28px #3aa0ff,
        0 0 48px #3aa0ff;
      animation: flicker 6s infinite;
    }
    @keyframes flicker {
      0%, 92%, 96%, 100% { opacity: 1; }
      94% { opacity: 0.75; }
    }
    .stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin: 0;
    }
    .stat {
      display: flex;
      flex-direction: column-reverse;
      padding: 20px;
    }
    .stat dd {
      margin: 0;
      font-size: 2.2rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: var(--accent);
    }
    .stat dt {
      font-size: 0.88rem;
      color: var(--muted);
      line-height: 1.4;
    }
  `,
})
export class About {
  protected readonly i18n = inject(LanguageService);
}

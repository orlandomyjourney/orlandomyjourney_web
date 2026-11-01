import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { GoalStatus } from '../i18n/content.model';
import { RevealDirective } from '../shared/reveal.directive';

const CHECKBOX: Record<GoalStatus, string> = { done: '[x]', progress: '[~]', next: '[ ]' };

@Component({
  selector: 'app-roadmap',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    @let c = i18n.t().roadmap;
    <section id="roadmap" class="section">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow"><b>08</b> · {{ c.file }}</p>
          <h2 class="section-title">{{ c.title }}</h2>
          <p class="section-intro">{{ c.intro }}</p>
        </header>

        <ol class="goals">
          @for (g of c.goals; track g.title; let i = $index) {
            <li class="goal" [attr.data-status]="g.status" appReveal [revealDelay]="(i % 3) * 80">
              <span class="box mono" aria-hidden="true">{{ checkbox[g.status] }}</span>
              <div class="body">
                <span class="status mono">{{ c.status[g.status] }}</span>
                <h3>{{ g.title }}</h3>
                <p>{{ g.text }}</p>
              </div>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .goals {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 16px;
    }
    @media (min-width: 720px) {
      .goals {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1040px) {
      .goals {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    [data-status='done'] {
      --s: var(--green);
    }
    [data-status='progress'] {
      --s: var(--yellow);
    }
    [data-status='next'] {
      --s: var(--pink);
    }
    .goal {
      display: flex;
      gap: 16px;
      padding: 22px;
      border-radius: var(--radius);
      border: 1px solid var(--line);
      background: var(--surface);
    }
    .goal[data-status='next'] {
      grid-column: 1 / -1;
      border: 1px dashed var(--pink);
      background:
        radial-gradient(circle at 0% 50%, color-mix(in srgb, var(--pink) 14%, transparent), transparent 60%),
        var(--surface);
    }
    .goal[data-status='next'] h3 {
      font-size: clamp(1.4rem, 3vw, 2rem);
    }
    .box {
      white-space: pre;
      color: var(--s);
      font-weight: 500;
      padding-top: 2px;
    }
    .status {
      font-size: 0.75rem;
      color: var(--s);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    h3 {
      font-size: 1.15rem;
      margin: 4px 0 6px;
    }
    .goal p {
      color: var(--muted);
      font-size: 0.94rem;
    }
  `,
})
export class Roadmap {
  protected readonly i18n = inject(LanguageService);
  protected readonly checkbox = CHECKBOX;
}

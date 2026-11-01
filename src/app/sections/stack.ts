import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { RevealDirective } from '../shared/reveal.directive';

/** Skills rendered like a JSON file, one key per group. */
@Component({
  selector: 'app-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    @let c = i18n.t().stack;
    <section id="stack" class="section section--alt stack">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow"><b>05</b> · {{ c.file }}</p>
          <h2 class="section-title">{{ c.title }}</h2>
        </header>

        <div class="grid">
          @for (g of c.groups; track g.name; let i = $index) {
            <div class="card group" appReveal [revealDelay]="(i % 3) * 80">
              <p class="key mono"><span class="tk-key">"{{ g.name }}"</span><span class="tk-pun">: [</span></p>
              <div class="chips">
                @for (item of g.items; track item) {
                  <span class="chip">{{ item }}</span>
                }
              </div>
              <p class="mono tk-pun close">]</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .stack {
      padding-top: 0;
    }
    .grid {
      display: grid;
      gap: 16px;
    }
    @media (min-width: 700px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1040px) {
      .grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .group {
      background: var(--bg-deeper);
    }
    .key {
      font-size: 0.9rem;
      margin-bottom: 14px;
    }
    .chips {
      padding-left: 14px;
    }
    .chip {
      color: var(--fg);
    }
    .close {
      margin-top: 12px;
      font-size: 0.9rem;
    }
  `,
})
export class Stack {
  protected readonly i18n = inject(LanguageService);
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { PROFILE } from '../i18n/profile';
import { Icon } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-writing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, Icon],
  template: `
    @let c = i18n.t().writing;
    <section id="writing" class="section section--alt">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow"><b>07</b> · {{ c.file }}</p>
          <h2 class="section-title">{{ c.title }}</h2>
          <p class="section-intro">{{ c.intro }}</p>
        </header>

        <div class="grid">
          @for (post of c.posts; track post.title; let i = $index) {
            <article class="card card--hover post" appReveal [revealDelay]="i * 90">
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

        <p class="all" appReveal>
          <a class="btn btn--ghost" [href]="profile.links.linkedinActivity" target="_blank" rel="noopener">
            <app-icon name="linkedin" /> {{ c.allPosts }}
          </a>
        </p>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      gap: 20px;
    }
    @media (min-width: 900px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .post {
      display: flex;
      flex-direction: column;
      padding: 26px;
    }
    .file {
      font-size: 0.78rem;
      color: var(--comment);
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
    .all {
      margin-top: 40px;
      text-align: center;
    }
  `,
})
export class Writing {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = PROFILE;

  protected slug(title: string): string {
    return title
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { PROFILE } from '../i18n/profile';
import { Icon } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, Icon],
  template: `
    @let c = i18n.t().contact;
    @let f = i18n.t().footer;
    <section id="contact" class="section section--alt contact">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow"><b>09</b> · {{ c.file }}</p>
          <h2 class="section-title">{{ c.title }}</h2>
          <p class="section-intro">{{ c.text }}</p>
        </header>

        <div class="window terminal" appReveal>
          <div class="window__bar"><i></i><i></i><i></i> bash · {{ c.file }}</div>
          <div class="term mono">
            <p><span class="tk-var">orlando&#64;journey</span>:<span class="tk-fn">~</span>$ ./{{ c.file }}</p>
            <p>
              <span class="tk-com">→</span> email&nbsp;&nbsp;&nbsp;
              <a [href]="'mailto:' + profile.email">{{ profile.email }}</a>
            </p>
            <p>
              <span class="tk-com">→</span> linkedin
              <a [href]="profile.links.linkedin" target="_blank" rel="noopener">linkedin.com/in/orlandomyjourney</a>
            </p>
            <p>
              <span class="tk-com">→</span> github&nbsp;&nbsp;
              <a [href]="profile.links.github" target="_blank" rel="noopener">github.com/orlandomyjourney</a>
            </p>
            <p>
              <span class="tk-com">→</span> resume&nbsp;&nbsp;
              <a [href]="profile.cv" download>Orlando-Guzman-Resume.pdf</a>
            </p>
            <p><span class="tk-var">orlando&#64;journey</span>:<span class="tk-fn">~</span>$ <span class="caret"></span></p>
          </div>
        </div>

        <div class="ctas" appReveal>
          <a class="btn btn--primary" [href]="'mailto:' + profile.email"><app-icon name="mail" /> {{ c.emailLabel }}</a>
          <a class="btn btn--ghost" [href]="profile.links.linkedin" target="_blank" rel="noopener"><app-icon name="linkedin" /> LinkedIn</a>
          <a class="btn btn--ghost" [href]="profile.cv" download><app-icon name="download" /> {{ i18n.t().nav.downloadCv }}</a>
        </div>
      </div>

      <footer class="footer container mono">
        <p>© {{ year }} {{ profile.name }} · {{ f.built }}</p>
        <a [href]="profile.links.repo" target="_blank" rel="noopener"><app-icon name="github" /> {{ f.source }}</a>
      </footer>
    </section>
  `,
  styles: `
    .contact {
      padding-bottom: 32px;
    }
    .terminal {
      max-width: 760px;
    }
    .term {
      padding: 20px 22px 24px;
      font-size: 0.88rem;
      line-height: 2;
      overflow-x: auto;
      white-space: nowrap;
    }
    .caret {
      display: inline-block;
      width: 9px;
      height: 1.1em;
      vertical-align: text-bottom;
      background: var(--fg);
      animation: blink 1s steps(1) infinite;
    }
    @keyframes blink {
      50% {
        opacity: 0;
      }
    }
    .ctas {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 32px;
    }
    .footer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 12px;
      margin-top: 120px;
      padding-top: 24px;
      border-top: 1px solid var(--line);
      font-size: 0.78rem;
      color: var(--comment);
    }
    .footer a {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: var(--comment);
    }
  `,
})
export class Contact {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}

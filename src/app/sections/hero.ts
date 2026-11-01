import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../core/language.service';
import { PROFILE } from '../i18n/profile';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    @let c = i18n.t().hero;
    <section id="top" class="hero">
      <div class="glow glow--a" aria-hidden="true"></div>
      <div class="glow glow--b" aria-hidden="true"></div>

      <div class="container hero__grid">
        <div class="hero__text">
          <p class="mono hello"><span class="tk-com">// {{ c.greeting }}</span></p>
          <h1 class="name">Orlando <span class="name__accent">Guzman</span></h1>

          <ul class="headline">
            @for (item of c.headline; track item) {
              <li>{{ item }}</li>
            }
          </ul>

          <p class="typed mono" aria-hidden="true">
            <span class="tk-kw">&gt;</span> focus: <span class="tk-str">{{ typed() }}</span><span class="caret"></span>
          </p>

          <p class="tagline">{{ c.tagline }}</p>

          <div class="ctas">
            <a class="btn btn--primary" [href]="profile.cv" download><app-icon name="download" /> {{ c.ctaCv }}</a>
            <a class="btn btn--ghost" [routerLink]="[]" fragment="contact">{{ c.ctaContact }} <app-icon name="arrow" /></a>
            <span class="socials">
              <a [href]="profile.links.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><app-icon name="linkedin" /></a>
              <a [href]="profile.links.github" target="_blank" rel="noopener" aria-label="GitHub"><app-icon name="github" /></a>
              <a [href]="'mailto:' + profile.email" aria-label="Email"><app-icon name="mail" /></a>
            </span>
          </div>

          <p class="location"><app-icon name="pin" /> {{ c.location }}</p>
        </div>

        <div class="hero__visual">
          <figure class="photo">
            <img [src]="profile.photo" [alt]="c.photoAlt" width="720" height="720" fetchpriority="high" />
          </figure>

          <div class="window code" aria-hidden="true">
            <div class="window__bar"><i></i><i></i><i></i> orlando.py</div>
            <pre><code><span class="tk-var">orlando</span> <span class="tk-kw">=</span> {{ '{' }}
    <span class="tk-key">"role"</span>: <span class="tk-str">"{{ c.code.role }}"</span>,
    <span class="tk-key">"focus"</span>: [@for (f of c.code.focus; track f; let last = $last) {<span class="tk-str">"{{ f }}"</span>@if (!last) {, }}],
    <span class="tk-key">"stack"</span>: [@for (t of c.code.stack; track t; let last = $last) {<span class="tk-str">"{{ t }}"</span>@if (!last) {, }}],
    <span class="tk-key">"learning"</span>: [@for (l of c.code.learning; track l; let last = $last) {<span class="tk-str">"{{ l }}"</span>@if (!last) {, }}],
    <span class="tk-key">"next_stop"</span>: <span class="tk-str">"{{ c.code.nextStop }}"</span>,
    <span class="tk-key">"open_to_talk"</span>: <span class="tk-fn">True</span>,
{{ '}' }}</code></pre>
          </div>
        </div>
      </div>

      <a class="scroll-cue mono" [routerLink]="[]" fragment="about">
        {{ c.scroll }}
        <app-icon name="down" />
      </a>
    </section>
  `,
  styles: `
    .hero {
      position: relative;
      overflow: hidden;
      min-height: calc(100svh - var(--header-h) - var(--status-h));
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 56px 0 96px;
      background-image:
        linear-gradient(var(--line) 1px, transparent 1px),
        linear-gradient(90deg, var(--line) 1px, transparent 1px);
      background-size: 56px 56px;
      background-position: center;
    }
    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at center, transparent 0%, var(--bg) 72%);
      pointer-events: none;
    }
    .glow {
      position: absolute;
      width: 520px;
      height: 520px;
      border-radius: 50%;
      filter: blur(90px);
      opacity: 0.32;
      pointer-events: none;
      z-index: 1;
    }
    .glow--a {
      background: var(--purple);
      top: -160px;
      left: -120px;
    }
    .glow--b {
      background: var(--blue);
      bottom: -200px;
      right: -120px;
    }
    .hero__grid {
      position: relative;
      z-index: 2;
      display: grid;
      gap: 56px;
      align-items: center;
    }
    @media (min-width: 960px) {
      .hero__grid {
        grid-template-columns: 1.15fr 1fr;
      }
    }
    .hello {
      font-size: 0.95rem;
      margin-bottom: 8px;
    }
    .name {
      font-size: clamp(3rem, 9vw, 5.6rem);
      font-weight: 800;
      letter-spacing: -0.045em;
      line-height: 1;
    }
    .name__accent {
      background: linear-gradient(100deg, var(--blue), var(--purple) 55%, var(--pink));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .headline {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 0;
      margin-top: 22px;
      font-weight: 600;
      font-size: 1.02rem;
    }
    .headline li:not(:last-child)::after {
      content: '|';
      color: var(--pink);
      margin: 0 10px;
      font-weight: 400;
    }
    .typed {
      margin-top: 18px;
      font-size: 0.95rem;
      color: var(--muted);
      min-height: 1.6em;
    }
    .caret {
      display: inline-block;
      width: 8px;
      height: 1.1em;
      margin-left: 2px;
      vertical-align: text-bottom;
      background: var(--accent);
      animation: blink 1s steps(1) infinite;
    }
    @keyframes blink {
      50% {
        opacity: 0;
      }
    }
    .tagline {
      margin-top: 18px;
      font-size: 1.2rem;
      color: var(--muted);
      max-width: 600px;
    }
    .ctas {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
      margin-top: 32px;
    }
    .socials {
      display: inline-flex;
      gap: 4px;
      margin-left: 4px;
    }
    .socials a {
      display: inline-flex;
      padding: 9px;
      border-radius: 50%;
      color: var(--muted);
      font-size: 20px;
      transition:
        color 0.2s ease,
        background-color 0.2s ease;
    }
    .socials a:hover {
      color: var(--accent);
      background: var(--surface);
    }
    .location {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 22px;
      font-size: 0.9rem;
      color: var(--comment);
    }
    .hero__visual {
      position: relative;
      max-width: 460px;
      width: 100%;
      justify-self: center;
      padding-bottom: 90px;
    }
    .photo {
      margin: 0;
      border-radius: 28px;
      overflow: hidden;
      border: 1px solid var(--line);
      box-shadow:
        0 0 0 6px color-mix(in srgb, var(--accent) 18%, transparent),
        0 30px 80px var(--glow);
      transform: rotate(2deg);
    }
    .photo img {
      width: 100%;
      height: auto;
    }
    .code {
      position: absolute;
      left: -12px;
      right: -28px;
      bottom: 0;
      transform: rotate(-2deg);
    }
    .code pre {
      margin: 0;
      padding: 14px 16px;
      font-family: var(--font-mono);
      font-size: 0.74rem;
      line-height: 1.7;
      white-space: pre-wrap;
      color: var(--fg);
    }
    @media (max-width: 600px) {
      .code {
        left: -8px;
        right: -8px;
      }
    }
    .scroll-cue {
      position: absolute;
      z-index: 2;
      left: 50%;
      bottom: 22px;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      font-size: 0.75rem;
      color: var(--comment);
    }
    .scroll-cue app-icon {
      animation: bob 1.8s ease-in-out infinite;
    }
    @keyframes bob {
      50% {
        transform: translateY(5px);
      }
    }
    @media (max-height: 760px) {
      .scroll-cue {
        display: none;
      }
    }
  `,
})
export class Hero {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = PROFILE;
  protected readonly typed = signal(this.i18n.t().hero.roles[0]);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      // Types and deletes each role, like someone editing the line.
      let role = 0;
      let chars = this.typed().length;
      let deleting = false;
      const timer = setInterval(() => {
        const roles = this.i18n.t().hero.roles;
        const word = roles[role % roles.length];
        if (deleting) {
          chars--;
          if (chars <= 0) {
            deleting = false;
            role++;
          }
        } else {
          chars++;
          if (chars >= word.length + 18) deleting = true; // pause while fully typed
        }
        const current = roles[role % roles.length];
        this.typed.set(current.slice(0, Math.max(0, Math.min(chars, current.length))));
      }, 70);
      destroyRef.onDestroy(() => clearInterval(timer));
    });
  }
}

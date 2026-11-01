import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { RevealDirective } from '../shared/reveal.directive';

/**
 * API-led view of the modernization: MuleSoft Experience → Process → System APIs,
 * with Azure and OpenShift services in the process layer and the legacy core behind the System API.
 */
@Component({
  selector: 'app-architecture',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    @let c = i18n.t().architecture;
    @let l = c.layers;
    <section id="architecture" class="section">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow"><b>03</b> · {{ c.file }}</p>
          <h2 class="section-title">{{ c.title }}</h2>
          <p class="section-intro">{{ c.intro }}</p>
        </header>

        <div class="layout">
          <figure class="window diagram" appReveal>
            <div class="window__bar"><i></i><i></i><i></i> {{ c.file }}</div>

            <ul class="legend">
              <li data-zone="internet">{{ c.zones.internet }}</li>
              <li data-zone="mule">{{ c.zones.mulesoft }}</li>
              <li data-zone="azure">{{ c.zones.azure }}</li>
              <li data-zone="openshift">{{ c.zones.openshift }}</li>
              <li data-zone="legacy">{{ c.zones.legacy }}</li>
            </ul>

            <div class="flow">
              <div class="node" data-zone="internet">
                <strong>{{ l.channels }}</strong><span>{{ l.channelsSub }}</span>
              </div>
              <div class="link" aria-hidden="true"><span>HTTPS · OAuth 2.0</span></div>

              <div class="node" data-zone="mule">
                <em class="badge badge--public">public</em>
                <strong>{{ l.experience }}</strong><span>{{ l.experienceSub }}</span>
              </div>
              <div class="link" aria-hidden="true"></div>

              <div class="node" data-zone="mule">
                <em class="badge">internal</em>
                <strong>{{ l.process }}</strong><span>{{ l.processSub }}</span>
              </div>
              <div class="link link--fan" aria-hidden="true"></div>

              <div class="row row--3">
                <div class="node" data-zone="azure">
                  <strong>{{ l.logicApps }}</strong><span>{{ l.logicAppsSub }}</span>
                </div>
                <div class="node" data-zone="azure">
                  <strong>{{ l.functions }}</strong><span>{{ l.functionsSub }}</span>
                </div>
                <div class="node" data-zone="openshift">
                  <strong>{{ l.quarkus }}</strong><span>{{ l.quarkusSub }}</span>
                </div>
              </div>

              <div class="row row--support">
                <div class="node node--side" data-zone="azure">
                  <strong>{{ l.serviceBus }}</strong><span>{{ l.serviceBusSub }}</span>
                </div>
              </div>
              <div class="node node--side" data-zone="azure">
                <strong>{{ l.data }}</strong><span>{{ l.dataSub }}</span>
              </div>
              <div class="link" aria-hidden="true"></div>

              <div class="node" data-zone="mule">
                <em class="badge">internal</em>
                <strong>{{ l.system }}</strong><span>{{ l.systemSub }}</span>
              </div>
              <div class="link link--fan" aria-hidden="true"></div>

              <div class="row row--3">
                <div class="node" data-zone="legacy">
                  <strong>{{ l.core }}</strong><span>{{ l.coreSub }}</span>
                </div>
                <div class="node" data-zone="legacy">
                  <strong>{{ l.engines }}</strong><span>{{ l.enginesSub }}</span>
                </div>
                <div class="node" data-zone="legacy">
                  <strong>{{ l.auxiliary }}</strong><span>{{ l.auxiliarySub }}</span>
                </div>
              </div>
            </div>

            <figcaption class="mono">
              <span class="tk-com"># {{ c.disclaimer }}</span>
            </figcaption>
          </figure>

          <div class="principles">
            <h3 class="mono" appReveal><span class="tk-kw">principles</span>:</h3>
            @for (p of c.principles; track p.title; let i = $index) {
              <article class="card principle" appReveal [revealDelay]="i * 80">
                <span class="num mono">0{{ i + 1 }}</span>
                <h4>{{ p.title }}</h4>
                <p>{{ p.text }}</p>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .layout {
      display: grid;
      gap: 40px;
    }
    @media (min-width: 1080px) {
      .layout {
        grid-template-columns: 1.45fr 1fr;
        align-items: start;
      }
      .principles {
        position: sticky;
        top: calc(var(--header-h) + 24px);
      }
    }
    .diagram {
      margin: 0;
    }
    [data-zone='internet'] {
      --z: var(--comment);
    }
    [data-zone='mule'] {
      --z: var(--purple);
    }
    [data-zone='azure'] {
      --z: var(--blue);
    }
    [data-zone='openshift'] {
      --z: var(--red);
    }
    [data-zone='legacy'] {
      --z: var(--orange);
    }
    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 16px;
      padding: 16px 20px 0;
      font-family: var(--font-mono);
      font-size: 0.74rem;
      color: var(--muted);
    }
    .legend li {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .legend li::before {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 3px;
      background: var(--z);
    }
    .flow {
      display: flex;
      flex-direction: column;
      padding: 20px;
    }
    .row {
      display: grid;
      gap: 10px;
    }
    @media (min-width: 640px) {
      .row--3 {
        grid-template-columns: repeat(3, 1fr);
      }
      .row--support {
        grid-template-columns: 2fr 1fr;
      }
    }
    .row--support {
      margin: 10px 0;
    }
    .node {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 12px 14px;
      border-radius: 10px;
      border: 1px solid color-mix(in srgb, var(--z) 55%, transparent);
      border-left: 4px solid var(--z);
      background: color-mix(in srgb, var(--z) 10%, var(--bg-deeper));
    }
    .node strong {
      font-size: 0.95rem;
    }
    .badge + strong {
      padding-right: 64px;
    }
    .node span {
      font-size: 0.8rem;
      color: var(--muted);
      line-height: 1.45;
    }
    .node--side {
      border-style: dashed;
      border-left-style: solid;
    }
    .badge {
      position: absolute;
      top: 10px;
      right: 10px;
      font-family: var(--font-mono);
      font-style: normal;
      font-size: 0.66rem;
      padding: 1px 8px;
      border-radius: 999px;
      border: 1px solid var(--line);
      color: var(--comment);
    }
    .badge--public {
      color: var(--green);
      border-color: var(--green);
    }
    .link {
      position: relative;
      height: 30px;
      display: flex;
      justify-content: center;
    }
    .link::before {
      content: '';
      width: 2px;
      height: 100%;
      background: linear-gradient(var(--line), var(--accent));
    }
    .link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 8px;
      height: 8px;
      border-right: 2px solid var(--accent);
      border-bottom: 2px solid var(--accent);
      transform: translate(-50%, -1px) rotate(45deg);
    }
    .link span {
      position: absolute;
      left: calc(50% + 12px);
      top: 50%;
      transform: translateY(-50%);
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--comment);
      white-space: nowrap;
    }
    figcaption {
      padding: 0 20px 18px;
      font-size: 0.75rem;
    }
    .principles {
      display: grid;
      gap: 14px;
    }
    .principles h3 {
      font-size: 0.95rem;
      font-weight: 500;
    }
    .principle {
      padding: 20px 22px;
    }
    .num {
      font-size: 0.8rem;
      color: var(--pink);
    }
    .principle h4 {
      font-size: 1.05rem;
      margin: 6px 0 8px;
    }
    .principle p {
      font-size: 0.92rem;
      color: var(--muted);
    }
  `,
})
export class Architecture {
  protected readonly i18n = inject(LanguageService);
}

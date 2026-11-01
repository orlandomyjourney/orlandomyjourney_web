import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TriangleDiagram } from '../i18n/content.model';

/**
 * Three-node architecture diagram. Wide screens get the triangle as SVG;
 * narrow screens get the same nodes stacked, with each link between them.
 */
@Component({
  selector: 'app-triangle-diagram',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let d = diagram();
    <svg class="wide" viewBox="0 0 1000 560" role="img" [attr.aria-label]="d.nodes[0].title + ', ' + d.nodes[1].title + ', ' + d.nodes[2].title">
      <defs>
        <marker id="tri-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M1 1L9 5L1 9z" fill="context-stroke" />
        </marker>
      </defs>

      @for (n of d.nodes; track n.title; let i = $index) {
        <g [attr.transform]="'translate(' + pos[i][0] + ' ' + pos[i][1] + ')'" [attr.class]="'node node--' + i">
          <rect width="300" height="150" rx="14" />
          <rect class="bar" width="7" height="150" rx="3.5" />
          <text x="22" y="38" class="n-title">{{ n.title }}</text>
          @for (line of n.lines; track line; let j = $index) {
            <text x="22" [attr.y]="72 + j * 25" class="n-line">{{ line }}</text>
          }
        </g>
      }

      <line class="link link--lora" x1="326" y1="95" x2="674" y2="95" marker-start="url(#tri-arrow)" marker-end="url(#tri-arrow)" />
      <text x="500" y="76" text-anchor="middle" class="l-title l-title--lora">{{ d.links[0].title }}</text>
      @for (line of d.links[0].lines; track line; let j = $index) {
        <text x="500" [attr.y]="126 + j * 22" text-anchor="middle" class="l-line">{{ line }}</text>
      }

      <line class="link link--serial" x1="830" y1="176" x2="656" y2="384" marker-start="url(#tri-arrow)" marker-end="url(#tri-arrow)" />
      <text x="690" y="262" text-anchor="end" class="l-title l-title--serial">{{ d.links[1].title }}</text>
      @for (line of d.links[1].lines; track line; let j = $index) {
        <text x="690" [attr.y]="288 + j * 22" text-anchor="end" class="l-line">{{ line }}</text>
      }

      <line class="link link--none" x1="210" y1="176" x2="380" y2="384" />
      <text x="20" y="262" class="l-title l-title--none">{{ d.links[2].title }}</text>
      @for (line of d.links[2].lines; track line; let j = $index) {
        <text x="20" [attr.y]="288 + j * 22" class="l-line">{{ line }}</text>
      }
    </svg>

    <ol class="narrow">
      @for (n of d.nodes; track n.title; let i = $index) {
        <li [class]="'stack-node node--' + i">
          <strong>{{ n.title }}</strong>
          @for (line of n.lines; track line) {
            <span>{{ line }}</span>
          }
        </li>
        @if (i < 2) {
          <li class="stack-link" aria-hidden="true">
            <b>⇅ {{ d.links[i].title }}</b>
            <span>{{ d.links[i].lines.join(' · ') }}</span>
          </li>
        }
      }
    </ol>
  `,
  styles: `
    :host {
      display: block;
      --n0: var(--purple);
      --n1: var(--cyan);
      --n2: var(--orange);
    }
    .wide {
      display: none;
      width: 100%;
      max-width: 880px;
      height: auto;
      margin: 0 auto;
    }
    .node rect {
      fill: var(--bg-deeper);
      stroke: var(--c);
      stroke-width: 1.5;
    }
    .node .bar {
      fill: var(--c);
      stroke: none;
    }
    .node--0 {
      --c: var(--n0);
    }
    .node--1 {
      --c: var(--n1);
    }
    .node--2 {
      --c: var(--n2);
    }
    .n-title {
      font: 600 22px var(--font-sans);
      fill: var(--c);
    }
    .n-line {
      font: 400 15px var(--font-sans);
      fill: var(--fg);
    }
    .link {
      stroke-width: 3;
    }
    .link--lora {
      stroke: var(--blue);
    }
    .link--serial {
      stroke: var(--green);
    }
    .link--none {
      stroke: var(--comment);
      stroke-width: 2;
      stroke-dasharray: 9 8;
    }
    .l-title {
      font: 500 17px var(--font-mono);
    }
    .l-title--lora {
      fill: var(--blue);
    }
    .l-title--serial {
      fill: var(--green);
    }
    .l-title--none {
      fill: var(--comment);
    }
    .l-line {
      font: 400 14px var(--font-mono);
      fill: var(--muted);
    }
    .narrow {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 8px;
    }
    .stack-node {
      display: flex;
      flex-direction: column;
      padding: 12px 14px;
      border-radius: 10px;
      border: 1px solid var(--c);
      border-left: 4px solid var(--c);
      background: var(--bg-deeper);
      font-size: 0.85rem;
      color: var(--muted);
    }
    .stack-node strong {
      color: var(--c);
      font-size: 1rem;
    }
    .stack-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--muted);
    }
    .stack-link b {
      color: var(--accent);
      font-weight: 500;
    }
    /* Declared last so it wins over the base .narrow rule. */
    @media (min-width: 820px) {
      .wide {
        display: block;
      }
      .narrow {
        display: none;
      }
    }
  `,
})
export class TriangleDiagramView {
  readonly diagram = input.required<TriangleDiagram>();
  /** Top-left, top-right and bottom node positions in the SVG. */
  protected readonly pos = [
    [20, 20],
    [680, 20],
    [350, 390],
  ];
}

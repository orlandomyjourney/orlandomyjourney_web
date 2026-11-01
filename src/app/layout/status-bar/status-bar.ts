import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { ThemeService } from '../../core/theme.service';
import { Icon } from '../../shared/icon';
import { NAV_ITEMS } from '../nav-items';

/** Editor-like status bar: shows where the reader is on the journey. */
@Component({
  selector: 'app-status-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <footer class="status mono" aria-hidden="true">
      <span class="item item--strong"><app-icon name="branch" /> main</span>
      <span class="item hide-sm">✓ 0 problems</span>
      <span class="spacer"></span>
      <span class="item">{{ progress() }}</span>
      <span class="item">{{ i18n.lang().toUpperCase() }}</span>
      <span class="item hide-sm">UTF-8</span>
      <span class="item hide-sm">{{ theme.theme() === 'dark' ? 'Dracula' : 'Alucard' }}</span>
    </footer>
  `,
  styles: `
    .status {
      position: fixed;
      inset: auto 0 0;
      z-index: 50;
      height: var(--status-h);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0 10px;
      font-size: 0.72rem;
      background: var(--accent);
      color: var(--accent-ink);
    }
    .item {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 0 8px;
      white-space: nowrap;
    }
    .item--strong {
      font-weight: 500;
    }
    .spacer {
      flex: 1;
    }
    @media (max-width: 600px) {
      .hide-sm {
        display: none;
      }
    }
  `,
})
export class StatusBar {
  readonly active = input('top');

  protected readonly i18n = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly progress = computed(() => {
    const index = NAV_ITEMS.findIndex((i) => i.id === this.active());
    return `Ln ${index + 1}/${NAV_ITEMS.length}`;
  });
}

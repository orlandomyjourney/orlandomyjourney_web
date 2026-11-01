import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LANG_PATH, LanguageService } from '../../core/language.service';
import { ThemeService } from '../../core/theme.service';
import { PROFILE } from '../../i18n/profile';
import { Icon } from '../../shared/icon';
import { NAV_ITEMS } from '../nav-items';

@Component({
  selector: 'app-top-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
})
export class TopBar {
  readonly active = input('top');

  protected readonly i18n = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly items = NAV_ITEMS;
  protected readonly profile = PROFILE;
  protected readonly otherPath = computed(() => LANG_PATH[this.i18n.otherLang()]);
  protected readonly activeFile = computed(() => {
    const item = this.items.find((i) => i.id === this.active());
    return item ? this.i18n.t().nav[item.key] : 'welcome.ts';
  });
}

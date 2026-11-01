import { afterNextRender, DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';

/** Fades an element in the first time it scrolls into view. */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.--reveal-delay.ms]': 'revealDelay()',
  },
})
export class RevealDirective {
  readonly revealDelay = input(0);

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        el.classList.add('is-visible');
        return;
      }
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.disconnect();
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
      );
      observer.observe(el);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}

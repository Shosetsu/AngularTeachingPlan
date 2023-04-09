import {
  AfterContentInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[libResizable]',
})
export class ResizableDirective implements AfterContentInit {
  @Input('libResizable') target!: HTMLElement;
  @Input() resizableType: ('left' | 'right' | 'top' | 'bottom')[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterContentInit(): void {
    this.resizableType.map((type) => {
      const resizableHandler = document.createElement('div');
      this.renderer.addClass(resizableHandler, 'resizable-handler');
      this.renderer.addClass(resizableHandler, `resizable-handler-${type}`);
      this.renderer.appendChild(this.el.nativeElement, resizableHandler);
      resizableHandler.addEventListener('mousedown', () => {
        document.onmousemove = (e) => {
          const base = Number(
            getComputedStyle(this.target)
              .getPropertyValue(`--resize-${type}`)
              .match(/\d+/)?.[0] ?? 0
          );
          const newPosition =
            type === 'left' || type === 'right' ? e.movementX : e.movementY;
          const movement = base + newPosition;
          this.renderer.setProperty(
            this.target,
            `style`,
            `--resize-${type} : ${movement}px`
          );
        };

        document.onmouseup = () => {
          document.onmouseup = null;
          document.onmousemove = null;
        };
      });
      resizableHandler.addEventListener('dblclick', () => {
        this.renderer.removeAttribute(this.target, `style`);
      });
    }).length && this.renderer.addClass(this.el.nativeElement, 'resizable');
  }
}

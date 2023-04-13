import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';
import { DataService } from '@app/shared/data.service';

@Directive({
  selector: '[libResizable]',
})
export class ResizableDirective implements AfterViewInit {
  @Input('libResizable') target!: HTMLElement;
  @Input() resizableType: ('left' | 'right' | 'top' | 'bottom')[] = [];
  @Input() resizeId?: string;

  private shade = document.createElement('div');

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private data: DataService
  ) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.shade, 'resizable-shade');
    this.renderer.appendChild(this.el.nativeElement, this.shade);

    this.resizableType.map((type) => {
      const resizableHandler = document.createElement('div');
      this.renderer.addClass(resizableHandler, 'resizable-handler');
      this.renderer.addClass(resizableHandler, `resizable-handler-${type}`);
      this.renderer.appendChild(this.el.nativeElement, resizableHandler);

      this.renderer.listen(resizableHandler, 'mousedown', () => {
        this.renderer.addClass(this.shade, 'open');
        const currentMouseMove = this.renderer.listen(
          document,
          'mousemove',
          (e) => {
            const base = Number(
              getComputedStyle(this.target)
                .getPropertyValue(`--resize-${type}`)
                .match(/\d+/)?.[0] ?? 0
            );
            const newPosition = {
              left: -e.movementX,
              right: e.movementX,
              top: -e.movementY,
              bottom: e.movementY,
            }[type];
            const movement = base + newPosition;
            this.target.style.setProperty(`--resize-${type}`, `${movement}px`);
            if (type === 'top') {
              this.renderer.setStyle(
                this.target,
                'top',
                Number(
                  getComputedStyle(this.target)
                    .getPropertyValue('top')

                    .match(/\d+/)?.[0]
                ) +
                  e.movementY +
                  'px'
              );
            }
            if (type === 'left') {
              this.renderer.setStyle(
                this.target,
                'left',
                Number(
                  getComputedStyle(this.target)
                    .getPropertyValue('left')

                    .match(/\d+/)?.[0]
                ) +
                  e.movementX +
                  'px'
              );
            }
          }
        );

        const currentMouseUp = this.renderer.listen(document, 'mouseup', () => {
          this.renderer.removeClass(this.shade, 'open');
          currentMouseMove();
          currentMouseUp();
          this.saveValue();
        });
      });

      this.renderer.listen(resizableHandler, 'dblclick', () => {
        if (this.target.hasAttribute('style')) {
          this.target.style.removeProperty(`--resize-${type}`);
        } else {
          const smallSize = getComputedStyle(this.target).getPropertyValue(
            `--resize-${type}-min`
          );
          if (smallSize) {
            this.target.style.setProperty(`--resize-${type}`, `${smallSize}`);
          }
        }
        this.saveValue();
      });
    }).length && this.renderer.addClass(this.el.nativeElement, 'resizable');

    this.loadValue();
  }
  loadValue() {
    if (this.resizeId) {
      const data = this.data.getData<Record<string, string>>(
        `resizable.${this.resizeId}`,
        {}
      );
      this.resizableType
        .filter((type) => data[type])
        .forEach((type) => {
          this.target.style.setProperty(`--resize-${type}`, data[type]);
        });
    }
  }

  saveValue() {
    if (this.resizeId) {
      const style = getComputedStyle(this.target);
      const data: Record<string, string> = {};
      this.resizableType.forEach((type) => {
        data[type] = style.getPropertyValue(`--resize-${type}`);
      });
      this.data.setData(`resizable.${this.resizeId}`, data);
    }
  }
}

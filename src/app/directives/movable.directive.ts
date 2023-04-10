import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { DataService } from '@app/shared/data.service';

@Directive({
  selector: '[libMovable]',
})
export class MovableDirective implements AfterViewInit {
  @Input('libMovable') movable!: HTMLElement;
  @Input() moveId?: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private data: DataService
  ) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.movable, 'movable');
    this.renderer.addClass(this.el.nativeElement, 'move-handler');

    if (this.moveId) {
      const [top, left] = this.data
        .getData<string>('movable.' + this.moveId, '')
        .split(',');
      this.renderer.setStyle(this.movable, 'top', top);
      this.renderer.setStyle(this.movable, 'left', left);
    }
  }

  @HostListener('mousedown')
  dragThis() {
    const currentMouseMove = this.renderer.listen(
      document,
      'mousemove',
      (e) => {
        const top = Math.max(this.movable.offsetTop + e.movementY, 0) + 'px';
        const left = Math.max(this.movable.offsetLeft + e.movementX, 0) + 'px';
        this.renderer.setStyle(this.movable, 'top', top);
        this.renderer.setStyle(this.movable, 'left', left);
      }
    );

    const currentMouseUp = this.renderer.listen(document, 'mouseup', () => {
      if (this.moveId) {
        this.data.setData(
          'movable.' + this.moveId,
          `${this.movable.style.top},${this.movable.style.left}`
        );
      }
      currentMouseMove();
      currentMouseUp();
    });
  }
}

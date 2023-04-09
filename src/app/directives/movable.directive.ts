import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[libMovable]',
})
export class MovableDirective implements AfterViewInit {
  @Input('libMovable') movable!: HTMLElement;
  @Input() moveId?: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.movable, 'movable');
    this.renderer.addClass(this.el.nativeElement, 'move-handler');

    if (this.moveId) {
      const [top, left] = (
        localStorage.getItem('movable.' + this.moveId) ?? ''
      ).split(',');
      this.renderer.setStyle(this.movable, 'top', top);
      this.renderer.setStyle(this.movable, 'left', left);
    }
  }

  @HostListener('mousedown')
  dragThis() {
    document.onmousemove = (e) => {
      const top = this.movable.offsetTop + e.movementY + 'px';
      const left = this.movable.offsetLeft + e.movementX + 'px';
      this.renderer.setStyle(this.movable, 'top', top);
      this.renderer.setStyle(this.movable, 'left', left);
    };

    document.onmouseup = () => {
      if (this.moveId) {
        localStorage.setItem(
          'movable.' + this.moveId,
          `${this.movable.style.top},${this.movable.style.left}`
        );
      }
      document.onmouseup = null;
      document.onmousemove = null;
    };
  }
}

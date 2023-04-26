import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'code',
})
export class DoubleClickDirective {
  constructor(private el: ElementRef) {}

  @HostListener('dblclick')
  doubleClick() {
    getSelection()?.selectAllChildren(this.el.nativeElement);
  }
}

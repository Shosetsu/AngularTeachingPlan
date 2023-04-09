import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { getCurrentKey } from '@app/configs/util';
import { DataService } from '@app/shared/data.service';

@Directive({
  selector: '[libCheck]',
})
export class CheckHistoryDirective implements OnInit, AfterViewInit {
  @Input('libCheck') checkId!: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.checkId = `${getCurrentKey()}-${this.checkId}`;
  }

  ngAfterViewInit(): void {
    if (this.data.getData<string>(`libCheck.${this.checkId}`, '')) {
      this.renderer.addClass(this.el.nativeElement, 'completed');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'non-complete');
    }
  }

  @HostListener('click')
  clicked(): void {
    this.renderer.removeClass(this.el.nativeElement, 'non-complete');
    this.renderer.addClass(this.el.nativeElement, 'completed');
    this.data.setData(`libCheck.${this.checkId}`, '1');
  }
}

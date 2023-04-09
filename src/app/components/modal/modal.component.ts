import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalService } from '@app/shared/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, AfterViewChecked {
  url?: string;
  safeUrl?: SafeResourceUrl;

  @ViewChild('main') el?: ElementRef;

  visible = false;

  constructor(
    private ds: DomSanitizer,
    private modal: ModalService,
    private render: Renderer2
  ) {}

  ngOnInit(): void {
    this.modal.listeningModals((url) => {
      if (url === this.url) {
        this.visible = !this.visible;
        return;
      }
      this.url = url;
      this.safeUrl = this.ds.bypassSecurityTrustResourceUrl(url);
      this.visible = true;
    });
  }

  ngAfterViewChecked(): void {
    if (this.el) {
      const [height, width] = (
        localStorage['modal.size'] ?? '600px,1000px'
      ).split(',');
      this.render.setStyle(this.el.nativeElement, 'height', height);
      this.render.setStyle(this.el.nativeElement, 'width', width);
    }
  }

  memoSize(): void {
    localStorage[
      'modal.size'
    ] = `${this.el?.nativeElement.style.height},${this.el?.nativeElement.style.width}`;
  }
}

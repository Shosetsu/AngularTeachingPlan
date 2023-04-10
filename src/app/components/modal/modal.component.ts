import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from '@app/shared/data.service';
import { ModalService } from '@app/shared/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, AfterViewInit {
  url?: string;
  safeUrl?: SafeResourceUrl;

  @ViewChild('main') el?: ElementRef;

  visible = false;

  size = '? x ?';

  constructor(
    private ds: DomSanitizer,
    private modal: ModalService,
    private render: Renderer2,
    private data: DataService
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

  ngAfterViewInit(): void {
    const [height, width] = this.data
      .getData<string>('modal.size', '600px,1000px')
      .split(',');
    this.render.setStyle(this.el?.nativeElement, 'height', height);
    this.render.setStyle(this.el?.nativeElement, 'width', width);
    this.size = `${height} x ${width}`;
  }

  maxWindow(): void {
    const ref = document.querySelector<HTMLDivElement>('.course-container');
    if (ref) {
      this.render.setStyle(
        this.el?.nativeElement,
        'height',
        ref.clientHeight - 20 + 'px'
      );
      this.render.setStyle(
        this.el?.nativeElement,
        'width',
        ref.clientWidth + 'px'
      );
      this.render.setStyle(this.el?.nativeElement, 'top', ref.offsetTop + 'px');
      this.render.setStyle(
        this.el?.nativeElement,
        'left',
        ref.offsetLeft + 'px'
      );
      this.memoSize();
    }
  }

  memoSize(): void {
    this.data.setData(
      'modal.size',
      `${this.el?.nativeElement.style.height},${this.el?.nativeElement.style.width}`
    );
    this.size = `${this.el?.nativeElement.style.height} x ${this.el?.nativeElement.style.width}`;
  }
}

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
export class ModalComponent implements OnInit {
  url?: string;
  safeUrl?: SafeResourceUrl;

  @ViewChild('main') el?: ElementRef;

  visible = false;

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
}

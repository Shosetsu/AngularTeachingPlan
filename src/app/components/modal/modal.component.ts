import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalService } from '@app/shared/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  url?: string;
  safeUrl?: SafeResourceUrl;

  @ViewChild('main') el?: ElementRef;

  visible = false;

  sub?: Subscription;

  constructor(private ds: DomSanitizer, private modal: ModalService) {}

  ngOnInit(): void {
    this.sub = this.modal.modals.subscribe((url) => {
      if (url === this.url) {
        this.visible = !this.visible;
        return;
      }
      this.url = url;
      this.safeUrl = this.ds.bypassSecurityTrustResourceUrl(url);
      this.visible = true;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}

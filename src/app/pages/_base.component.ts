import { inject } from '@angular/core';
import { ModalService } from '@app/shared/modal.service';

export class BaseComponent {
  private modal = inject(ModalService);
  baseHref = document.head.baseURI;

  keys = Object.keys;
  values = Object.values;
  originalOrder = () => 0;

  openLink(url: string, openOther = false) {
    if (openOther || (event as MouseEvent).altKey) {
      open(url.replace(/^\//, document.head.baseURI), '_blank');
      return;
    }
    this.modal.openLink(url.replace(/^\//, document.head.baseURI));
  }
}

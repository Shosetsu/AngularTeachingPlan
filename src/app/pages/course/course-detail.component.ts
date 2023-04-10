import { Component } from '@angular/core';
import { ModalService } from '@app/shared/modal.service';
import { BaseComponent } from '@pages/_base.component';

@Component({ template: `` })
export class CourseDetailComponent extends BaseComponent {
  baseHref = '';

  constructor(private modal: ModalService) {
    super();
    this.baseHref = document.head.baseURI;
  }

  openLink(url: string) {
    this.modal.openLink(url.replace(/^\//, document.head.baseURI));
  }
}

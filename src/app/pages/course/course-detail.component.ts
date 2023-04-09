import { Component } from '@angular/core';
import { ModalService } from '@app/shared/modal.service';
import { BaseComponent } from '@pages/_base.component';

@Component({ template: `` })
export class CourseDetailComponent extends BaseComponent {
  constructor(private modal: ModalService) {
    super();
  }

  openLink(url: string) {
    this.modal.openLink(url);
  }
}

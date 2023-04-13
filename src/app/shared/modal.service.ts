import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modals = new Subject<string>();

  openLink = (url: string) => this.modals.next(url);
}

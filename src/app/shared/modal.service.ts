import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals = new Subject<string>();

  openLink = (url: string) => this.modals.next(url);

  listeningModals = (callback: (value: string) => void) =>
    this.modals.subscribe(callback);
}

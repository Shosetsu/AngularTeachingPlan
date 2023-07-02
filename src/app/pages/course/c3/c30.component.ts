import { Component, inject } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { BaseComponent } from '@pages/_base.component';

@Component({
  selector: 'app-c30',
  templateUrl: './c30.component.html',
})
export class C30Component extends BaseComponent {
  private router = inject(Router);
  constructor() {
    super();
    (window as Window & typeof globalThis & { router: Router }).router =
      this.router;
  }
}

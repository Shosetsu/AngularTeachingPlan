import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-info',
  template: `<p
    class="error-info"
    *ngFor="let error of control.errors | keyvalue"
  >
    {{ error.key }}:{{ stringify(error.value) }}
  </p>`,
  styles: [
    `
      .error-info {
        border-bottom: red 1px solid;
        padding: 0.5rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
      }
    `,
  ],
})
export class ErrorInfoComponent {
  @Input() control!: FormControl;

  stringify = JSON.stringify;
}

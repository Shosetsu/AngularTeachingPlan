import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-sample',
  templateUrl: './code-sample.component.html',
  styleUrls: ['./code-sample.component.scss'],
})
export class CodeSampleComponent {
  @Input() code = '';

  copied = false;

  copy() {
    navigator.clipboard.writeText(this.code);

    this.copied = true;
    setTimeout(() => (this.copied = false), 3000);
  }
}

import { ChangeDetectionStrategy } from '@angular/core';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-code-sample',
  templateUrl: './code-sample.component.html',
  styleUrls: ['./code-sample.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeSampleComponent {
  @ViewChild('codeRef') codeContent?: ElementRef<HTMLElement>;

  copied = false;

  copy() {
    navigator.clipboard.writeText(
      this.codeContent?.nativeElement.innerText ?? ''
    );

    this.copied = true;
    setTimeout(() => (this.copied = false), 3000);
  }
}

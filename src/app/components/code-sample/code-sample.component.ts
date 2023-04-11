import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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

  constructor(private de: ChangeDetectorRef) {}

  copy() {
    navigator.clipboard.writeText(
      this.codeContent?.nativeElement.innerText ?? ''
    );

    this.copied = true;
    setTimeout(() => ((this.copied = false), this.de.detectChanges()), 3000);
  }
}

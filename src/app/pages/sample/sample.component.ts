/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['../course/course.component.scss'],
})
export class SampleComponent {
  isChildDom = window.parent !== window;

  constructor(private ngZone: NgZone) {
    (window as any).runInside = (fn: () => void) => this.ngZone.run(() => fn());
    (window as any).isInside = () => NgZone.isInAngularZone();
  }
}

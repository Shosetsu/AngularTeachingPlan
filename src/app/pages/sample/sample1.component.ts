/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['../course/course.component.scss'],
})
export class Sample1Component implements OnInit {
  isChildDom = window.parent !== window;
  no = location.pathname.match(/\d+$/)?.[0] ?? '';

  sample1Value = '1';

  constructor(private ngZone: NgZone) {
    (window as any).runInside = (fn: () => void) => this.ngZone.run(() => fn());
    (window as any).isInside = () => NgZone.isInAngularZone();
    (window as any).updateSample1Value = (val: string) =>
      (this.sample1Value = val);
  }

  ngOnInit(): void {
    setTimeout(() => (this.sample1Value = '2'), 5000);
  }
}

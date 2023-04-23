/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent {
  no = '';

  sample1Value = '1';

  constructor(private ngZone: NgZone, private route: ActivatedRoute) {
    (window as any).runInside = (fn: () => void) => this.ngZone.run(() => fn());
    (window as any).isInside = () => NgZone.isInAngularZone();
    (window as any).updateSample1Value = (val: string) =>
      (this.sample1Value = val);
    setTimeout(() => (this.sample1Value = '2'), 5000);

    this.route.params.subscribe((parm) => {
      this.no = parm['sid'];
    });
  }
}

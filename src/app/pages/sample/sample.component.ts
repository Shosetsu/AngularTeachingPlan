/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent {
  no = '';
  sample1Value = '1';

  showLife2 = true;
  infoList2 = [];

  form3 = new FormGroup({
    a1: new FormControl('', Validators.required),
    a2: new FormControl(false, Validators.requiredTrue),
    a3: new FormControl(''),
    a4: new FormControl(''),
    a5: new FormControl('', [Validators.max(50), Validators.min(10)]),
    a6: new FormControl(''),
    a7: new FormControl(''),
    a8: new FormControl(''),
  });

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

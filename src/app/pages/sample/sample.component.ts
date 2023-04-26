/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, NgZone } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, interval } from 'rxjs';

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
    a1: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z]*$'),
    ]),
    a2: new FormControl(false, Validators.requiredTrue),
    a3: new FormControl(''),
    a4: new FormControl(''),
    a5: new FormControl('', [Validators.max(50), Validators.min(10)]),
    a6: new FormControl(''),
    a7: new FormControl(''),
    a8: new FormControl(''),
  });

  paragraph4 = `可观察对象能让你在应用的各个部分之间传递消息。建议在事件处理、异步编程以及处理多个值时使用这些可观察对象。可观察对象可以提供任意类型的单个或多个值，可以是同步的（作为一个函数为它的调用者提供一个值），也可以是异步的。\nObservables let you pass messages between parts of your application. Observables are recommended for event handling, asynchronous programming, and handling multiple values. Observables can deliver single or multiple values of any type, either synchronously (as a function delivers a value to its caller) or asynchronously on a schedule.`;

  ob5 = new BehaviorSubject('可观测初始值');

  constructor(private ngZone: NgZone, private route: ActivatedRoute) {
    (window as any).runInside = (fn: () => void) => this.ngZone.run(() => fn());
    (window as any).isInside = () => NgZone.isInAngularZone();
    (window as any).updateSample1Value = (val: string) =>
      (this.sample1Value = val);
    setTimeout(() => (this.sample1Value = '2'), 5000);

    this.route.params.subscribe((parm) => {
      this.no = parm['sid'];

      if (parm['sid'] === '5') {
        interval(3000).subscribe((index) => {
          this.ob5.next(`这是来自3秒一次的自动化更新值，次数：${index + 1}`);
        });
      }
    });
  }

  nextValue5(): void {
    this.ob5.next(
      `这是来自手动的更新值，随机数（1~100）：${
        Math.round(Math.random() * 100) + 1
      }`
    );
  }
}

import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `<div>
    life!
    <input placeholder="单纯一个input" />
  </div>`,
  styles: [
    `
      :host {
        display: block;
        padding: 0.5rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
      }
    `,
  ],
})
export class LifecycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() memoried!: string[];

  ngOnChanges(changes: SimpleChanges): void {
    const log = `${new Date().toLocaleTimeString()} 发生了事件[OnChanges] : ${JSON.stringify(
      changes
    )}`;
    console.log(log);
    this.memoried.push(log);
  }

  ngOnInit(): void {
    const log = `${new Date().toLocaleTimeString()} 发生了事件[OnInit]`;
    console.log(log);
    this.memoried.push(log);
  }

  ngDoCheck(): void {
    const log = `${new Date().toLocaleTimeString()} 发生了事件[DoCheck]`;
    console.log(log);
    this.memoried.push(log);
  }

  ngAfterContentInit(): void {
    const log = `${new Date().toLocaleTimeString()} 发生了事件[AfterContentInit]`;
    console.log(log);
    this.memoried.push(log);
  }

  ngAfterContentChecked(): void {
    const log = `${new Date().toLocaleTimeString()} 发生了事件[AfterContentChecked]`;
    console.log(log);
    this.memoried.push(log);
  }

  ngAfterViewInit(): void {
    const log = `${new Date().toLocaleTimeString()} 发生了事件[AfterViewInit]`;
    console.log(log);
    this.memoried.push(log);
  }

  ngAfterViewChecked(): void {
    const log = `${new Date().toLocaleTimeString()} 发生了事件[AfterViewChecked]`;
    console.log(log);
    this.memoried.push(log);
  }

  ngOnDestroy(): void {
    const log = `${new Date().toLocaleTimeString()} 发生了事件[OnDestroy]`;
    console.log(log);
    this.memoried.push(log);
  }
}

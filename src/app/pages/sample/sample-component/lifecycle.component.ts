import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
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
    this.memoried.push(
      `${new Date().toLocaleTimeString()} 发生了事件[OnChanges] : ${JSON.stringify(
        changes
      )}`
    );
  }

  ngOnInit(): void {
    this.memoried.push(`${new Date().toLocaleTimeString()} 发生了事件[OnInit]`);
  }

  ngDoCheck(): void {
    this.memoried.push(
      `${new Date().toLocaleTimeString()} 发生了事件[DoCheck]`
    );
  }

  ngAfterContentInit(): void {
    this.memoried.push(
      `${new Date().toLocaleTimeString()} 发生了事件[AfterContentInit]`
    );
  }

  ngAfterContentChecked(): void {
    this.memoried.push(
      `${new Date().toLocaleTimeString()} 发生了事件[AfterContentChecked]`
    );
  }

  ngAfterViewInit(): void {
    this.memoried.push(
      `${new Date().toLocaleTimeString()} 发生了事件[AfterViewInit]`
    );
  }

  ngAfterViewChecked(): void {
    this.memoried.push(
      `${new Date().toLocaleTimeString()} 发生了事件[AfterViewChecked]`
    );
  }

  ngOnDestroy(): void {
    this.memoried.push(
      `${new Date().toLocaleTimeString()} 发生了事件[OnDestroy]`
    );
  }
}

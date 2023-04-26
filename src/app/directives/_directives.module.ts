import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovableDirective } from './movable.directive';
import { ThroughStyleDirective } from './through-style.directive';
import { ResizableDirective } from './resizable.directive';
import { CheckHistoryDirective } from './check-history.directive';
import { DoubleClickDirective } from './double-click.directive';

const modules = [
  MovableDirective,
  ThroughStyleDirective,
  ResizableDirective,
  CheckHistoryDirective,
  DoubleClickDirective
];

@NgModule({
  declarations: modules,
  imports: [CommonModule],
  exports: modules,
})
export class DirectivesModule {}

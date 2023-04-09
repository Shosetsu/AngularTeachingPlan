import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { DirectivesModule } from '@directives/_directives.module';
import { CodeSampleComponent } from './code-sample/code-sample.component';

export const modules = [ModalComponent, CodeSampleComponent];

@NgModule({
  declarations: modules,
  imports: [CommonModule, DirectivesModule],
  exports: modules,
})
export class ComponentsModule {}

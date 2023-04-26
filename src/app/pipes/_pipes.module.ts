import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharCodePipe } from './char-code.pipe';

export const pipes = [CharCodePipe];

@NgModule({
  declarations: pipes,
  imports: [CommonModule],
  exports: pipes,
})
export class PipesModule {}

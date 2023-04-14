import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sample1Component } from './sample1.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '@components/_components.module';

const routes: Routes = [{ path: '1', component: Sample1Component }];

@NgModule({
  declarations: [Sample1Component],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
})
export class SampleModule {}

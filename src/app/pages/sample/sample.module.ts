import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@components/_components.module';
import { ErrorInfoComponent } from './sample-component/error-info.component';
import { LifecycleComponent } from './sample-component/lifecycle.component';

const routes: Routes = [{ path: ':sid', component: SampleComponent }];

@NgModule({
  declarations: [SampleComponent, ErrorInfoComponent, LifecycleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
})
export class SampleModule {}

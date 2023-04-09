import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { DirectivesModule } from '@directives/_directives.module';
import { PipesModule } from '@pipes/_pipes.module';
import { CourseRoutingModule } from './course-routing.module';
import { CommonModule } from '@angular/common';
import { C00Component } from './c0/c00.component';
import { C01Component } from './c0/c01.component';
import { C02Component } from './c0/c02.component';
import { ComponentsModule } from '@components/_components.module';
import { C03Component } from './c0/c03.component';
import { C04Component } from './c0/c04.component';

@NgModule({
  declarations: [
    CourseComponent,
    C00Component,
    C01Component,
    C02Component,
    C03Component,
    C04Component,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class CourseModule {}

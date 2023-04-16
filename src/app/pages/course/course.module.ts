import { NgModule } from '@angular/core';
import { DirectivesModule } from '@directives/_directives.module';
import { PipesModule } from '@pipes/_pipes.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@components/_components.module';
import { CourseComponent } from '@pages/course/course.component';
import { C00Component } from './c0/c00.component';
import { C01Component } from './c0/c01.component';
import { C02Component } from './c0/c02.component';
import { C03Component } from './c0/c03.component';
import { C04Component } from './c0/c04.component';
import { C51Component } from './c5/c51.component';
import { C10Component } from './c1/c10.component';
import { Route, RouterModule } from '@angular/router';
import { getTitle } from '@app/configs/util';

const courseComponents = [
  C00Component,
  C01Component,
  C02Component,
  C03Component,
  C04Component,
  C10Component,
  C51Component,
];

@NgModule({
  declarations: [...courseComponents, CourseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      ...courseComponents.map<Route>((component) => ({
        title: getTitle,
        path: component.name.replace(/C(\d)(\d)Component/, 'course/c$1-$2'),
        component,
      })),
      { title: getTitle, path: 'course/:cid', component: CourseComponent },
    ]),
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class CourseModule {}

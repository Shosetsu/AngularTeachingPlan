import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { courseKeyList, getTitleByRoute } from '@app/configs/util';
import { ComponentsModule } from '@components/_components.module';
import { DirectivesModule } from '@directives/_directives.module';
import { CourseComponent } from '@pages/course/course.component';
import { PipesModule } from '@pipes/_pipes.module';
import { C00Component } from './c0/c00.component';
import { C01Component } from './c0/c01.component';
import { C02Component } from './c0/c02.component';
import { C03Component } from './c0/c03.component';
import { C04Component } from './c0/c04.component';
import { C10Component } from './c1/c10.component';
import { C11Component } from './c1/c11.component';
import { C12Component } from './c1/c12.component';
import { C13Component } from './c1/c13.component';
import { C14Component } from './c1/c14.component';
import { C15Component } from './c1/c15.component';
import { C20Component } from './c2/c20.component';
import { C21Component } from './c2/c21.component';
import { C22Component } from './c2/c22.component';
import { C23Component } from './c2/c23.component';
import { C30Component } from './c3/c30.component';
import { C31Component } from './c3/c31.component';
import { C32Component } from './c3/c32.component';
import { C33Component } from './c3/c33.component';
import { C40Component } from './c4/c40.component';
import { C41Component } from './c4/c41.component';
import { C42Component } from './c4/c42.component';
import { C50Component } from './c5/c50.component';
import { C51Component } from './c5/c51.component';
import { C52Component } from './c5/c52.component';
import { C53Component } from './c5/c53.component';
import { C54Component } from './c5/c54.component';
import { C55Component } from './c5/c55.component';
import { C56Component } from './c5/c56.component';

const courseComponents = [
  C00Component,
  C01Component,
  C02Component,
  C03Component,
  C04Component,
  C10Component,
  C11Component,
  C12Component,
  C13Component,
  C14Component,
  C15Component,
  C20Component,
  C21Component,
  C22Component,
  C23Component,
  C30Component,
  C31Component,
  C32Component,
  C33Component,
  C40Component,
  C41Component,
  C42Component,
  C50Component,
  C51Component,
  C52Component,
  C53Component,
  C54Component,
  C55Component,
  C56Component,
];

const routes: Routes = [
  ...courseComponents.map<Route>((component, index) => ({
    title: getTitleByRoute,
    path: 'course/' + courseKeyList[index],
    component,
  })),
  { title: getTitleByRoute, path: 'course/:cid', component: CourseComponent },
];

@NgModule({
  declarations: [...courseComponents, CourseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class CourseModule {}

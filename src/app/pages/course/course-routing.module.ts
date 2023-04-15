import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { getTitle } from '@app/configs/util';
import { CourseComponent } from '@pages/course/course.component';
import { C00Component } from './c0/c00.component';
import { C01Component } from './c0/c01.component';
import { C02Component } from './c0/c02.component';
import { C03Component } from './c0/c03.component';
import { C04Component } from './c0/c04.component';
import { C51Component } from './c5/c51.component';

const routes: Routes = [
  { title: getTitle, path: 'course/c0-0', component: C00Component },
  { title: getTitle, path: 'course/c0-1', component: C01Component },
  { title: getTitle, path: 'course/c0-2', component: C02Component },
  { title: getTitle, path: 'course/c0-3', component: C03Component },
  { title: getTitle, path: 'course/c0-4', component: C04Component },
  { title: getTitle, path: 'course/c4-1', component: C51Component },
  { title: getTitle, path: 'course/:cid', component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}

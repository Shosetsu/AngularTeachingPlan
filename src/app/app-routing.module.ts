import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {
    path: 'inline',
    loadChildren: () =>
      import('@pages/course/course.module').then((m) => m.CourseModule),
  },
  {
    title: 'Angular指导目录',
    path: '',
    component: MenuComponent,
    loadChildren: () =>
      import('@pages/course/course.module').then((m) => m.CourseModule),
  },
  {
    path: 'sample',
    loadChildren: () =>
      import('@pages/sample/sample.module').then((m) => m.SampleModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

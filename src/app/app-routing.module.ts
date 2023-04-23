import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { isChildWindow } from './configs/util';
import { DataService } from './shared/data.service';

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
    canActivateChild: [isChildWindow],
    loadChildren: () =>
      import('@pages/sample/sample.module').then((m) => m.SampleModule),
  },
  {
    path: 'reset',
    canActivate: [
      () => {
        localStorage['atp-data'] =
          '{"libCheck.c0-0-1":"1","movable.modal":"27px,530px","resizable.modal":{"left":"54px","right":"908px","top":"309px","bottom":"555px"},"libCheck.c0-0-2":"1","libCheck.c0-0-3":"1","libCheck.c0-0-4":"1","courseStatus":{"c0-0":1,"c0-1":1,"c0-2":1,"c0-3":1,"c0-4":1},"libCheck.c0-1-1":"1","libCheck.c0-1-2":"1","libCheck.c0-2-1":"1","libCheck.c0-2-2":"1","libCheck.c0-2-3":"1","libCheck.c0-3-1":"1","libCheck.c0-3-5":"1","libCheck.c0-3-3":"1","libCheck.c0-3-4":"1","libCheck.c0-3-2":"1","libCheck.c0-3-6":"1","libCheck.c0-4-1":"1","libCheck.c0-4-2":"1"}';
        inject(DataService).loadData();
      },
    ],
    component: MenuComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

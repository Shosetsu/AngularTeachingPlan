import { NgModule, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { isChildWindow } from './configs/util';
import { DataService } from './shared/data.service';

const routes: Routes = [
  {
    path: 'inline',
    canActivateChild: [isChildWindow],
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
    // canActivateChild: [isChildWindow],
    loadChildren: () =>
      import('@pages/sample/sample.module').then((m) => m.SampleModule),
  },
  {
    path: 'reset',
    canActivate: [
      (route: ActivatedRouteSnapshot) => {
        localStorage[
          'atp-data'
        ] = `{"libCheck.c0-0-1":"1","movable.modal":"26px,310px","resizable.modal":{"left":"400px","right":"1001px","top":"300px","bottom":"550px"},"libCheck.c0-0-2":"1","libCheck.c0-0-3":"1","libCheck.c0-0-4":"1","courseStatus":{"c0-0":1,"c0-1":1,"c0-2":1,"c0-3":1,"c0-4":1,"c1-0":1,"c1-1":1,"c1-5":1,"c1-2":1,"c1-3":1,"c1-4":1,"c2-1":1,"c2-3":1,"c5-0":1,"c5-1":1,"c5-2":1,"c5-3":1,"c5-4":1,"c5-5":1,"c3-0":1,"c3-1":1,"c3-2":1,"c3-3":1},"libCheck.c0-1-1":"1","libCheck.c0-1-2":"1","libCheck.c0-2-1":"1","libCheck.c0-2-2":"1","libCheck.c0-2-3":"1","libCheck.c0-3-1":"1","libCheck.c0-3-5":"1","libCheck.c0-3-3":"1","libCheck.c0-3-4":"1","libCheck.c0-3-2":"1","libCheck.c0-3-6":"1","libCheck.c0-4-1":"1","libCheck.c0-4-2":"1","libCheck.c1-0-1":"1","libCheck.c1-0-2":"1","libCheck.c1-1-1":"1","libCheck.c1-1-2":"1","libCheck.c1-1-3":"1","libCheck.c1-1-4":"1","libCheck.c1-1-5":"1","libCheck.c1-1-6":"1","libCheck.c1-1-7":"1","libCheck.c1-1-8":"1","libCheck.c1-1-9":"1","libCheck.c1-1-10":"1","libCheck.c1-1-11":"1","libCheck.c1-1-12":"1","libCheck.c1-2-1":"1","libCheck.c1-2-2":"1","libCheck.c1-2-3":"1","libCheck.c1-3-1":"1","libCheck.c1-3-2":"1","libCheck.c1-3-3":"1","libCheck.c1-3-4":"1","libCheck.c1-3-5":"1","libCheck.c1-4-1":"1","libCheck.c1-4-2":"1","libCheck.c1-4-3":"1","libCheck.c2-1-1":"1","libCheck.c2-1-2":"1","libCheck.c2-3-1":"1","libCheck.c2-3-2":"1","libCheck.c2-3-3":"1","libCheck.c5-0-1":"1","libCheck.c5-0-3":"1","libCheck.c5-1-1":"1","libCheck.c5-1-2":"1","libCheck.c5-2-1":"1","libCheck.c5-2-2":"1","libCheck.c5-3-1":"1","libCheck.c5-3-2":"1","libCheck.c5-3-3":"1","libCheck.c5-4-1":"1","libCheck.c5-4-2":"1","libCheck.c5-5-1":"1","libCheck.c5-5-2":"1","libCheck.c5-5-3":"1","libCheck.c5-5-4":"1","libCheck.c3-0-1":"1","libCheck.c3-0-2":"1","libCheck.c3-1-1":"1","libCheck.c3-2-1":"1","libCheck.c3-3-1":"1","libCheck.c3-3-2":"1","libCheck.c3-3-4":"1","libCheck.c3-3-3":"1","libCheck.c3-3-5":"1"}`;
        inject(DataService).loadData();
        return inject(Router).parseUrl(
          '/' + Object.keys(route.queryParams)[0] ?? ''
        );
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

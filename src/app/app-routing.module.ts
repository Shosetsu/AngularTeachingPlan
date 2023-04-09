import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {
    path: 'lazy1',
    loadChildren: async () =>
      (await import('./pages/lazy-menu/lazy-menu.module')).LazyMenuModule,
  },
  {
    path: 'lazy2/:aaa',
    loadChildren: () =>
      import('./pages/lazy-menu/lazy-menu.module').then(
        (m) => m.LazyMenuModule
      ),
  },
  {
    title: 'Angular指导目录',
    path: '',
    component: MenuComponent,
    loadChildren: () =>
      import('@pages/course/course.module').then((m) => m.CourseModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { ActivatedRouteSnapshot, Params, Route } from '@angular/router';
import { COURSE_LIST } from '@app/configs/constants';

export const getCourseKey = (params: Params, route: Route | null) =>
  params['cid'] ?? route?.path?.split('/')[1];

export const getTitleByKey: (key: string) => string = (key) =>
  COURSE_LIST.map(
    (course) => course.detail.find((de) => de.key === key)?.name
  ).find((name) => name) ?? '';

export const getTitle: (route: ActivatedRouteSnapshot) => string = (route) =>
  getTitleByKey(getCourseKey(route.params, route.routeConfig));

export const getCurrentKey = () =>
  location.pathname.match(/\/course\/(c\d-\d)/)?.[1] ?? '';

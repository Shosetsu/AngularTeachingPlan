import { ResolveFn } from '@angular/router';
import { COURSE_LIST } from '@app/configs/constants';

/** 从path获得当前课程key */
export const getCurrentKey = () =>
  location.pathname.match(/\/course\/(c\d-\d)/)?.[1] ?? '';

/** 获取课程名 */
export const getTitleByKey = (key: string) =>
  COURSE_LIST.map(
    (course) => course.detail.find((de) => de.key === key)?.name
  ).find((name) => name) ?? '';

/** 从路由解释课程名 */
export const getTitleByRoute: ResolveFn<string> = (route) =>
  getTitleByKey(route.url[1].toString());

/** 是子组件吗？ */
export const isChildView = () => !(window === parent);

import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
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

/** 是子窗口吗？不是的话回根path */
export const isChildWindow = () =>
  window !== parent || inject(Router).parseUrl('/');

/** 把二维json拆成一维后把key全抽出来 */
export const courseKeyList = COURSE_LIST.reduce<string[]>(
  (p, c) => [...(p ?? []), ...c.detail.map((detail) => detail.key)],
  []
);

import { Component } from '@angular/core';
import { COURSE_LIST } from '@app/configs/constants';
import { CourseService } from '@app/shared/course.service';
import { getCurrentKey } from '@app/configs/util';
import { BaseComponent } from '@pages/_base.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent extends BaseComponent {
  courseList = COURSE_LIST;

  get focusKey() {
    return getCurrentKey();
  }

  isCompleted = (key: string) => this.courseService.isCompleted(key);

  constructor(private courseService: CourseService) {
    super();
  }

  getProcessNumber(course: typeof COURSE_LIST[0]): number {
    return course.detail.filter((de) => this.courseService.isCompleted(de.key))
      .length;
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '@app/shared/course.service';
import { getCurrentKey, getTitleByKey } from '@app/configs/util';
import { BaseComponent } from '@pages/_base.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent extends BaseComponent {
  key = '';
  title = '';

  get isCompleted() {
    return this.courseService.isCompleted(this.key);
  }

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {
    super();
    this.route.params.subscribe(() => {
      this.key = getCurrentKey();
      this.title = getTitleByKey(this.key);
    });
  }

  markComplete() {
    this.courseService.changeKey(this.key);
  }
}

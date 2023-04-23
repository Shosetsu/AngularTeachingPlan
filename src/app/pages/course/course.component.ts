import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '@app/shared/course.service';
import { getCurrentKey, getTitleByKey } from '@app/configs/util';
import { BaseComponent } from '@pages/_base.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent extends BaseComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {
    const anchor = document.querySelector<HTMLElement>(
      '.menu-box .course:has(.focus)'
    )?.offsetTop;
    if (anchor) {
      document
        .querySelector('.menu-box')
        ?.scrollTo(0, anchor - screen.availHeight / 2);
    }
  }

  markComplete() {
    this.courseService.changeKey(this.key);
  }
}

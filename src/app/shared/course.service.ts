import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private data: DataService) {}

  private completedList = this.data.getData<Record<string, number>>(
    'courseStatus',
    {}
  );

  isCompleted(key: string): boolean {
    return Boolean(this.completedList[key]);
  }

  changeKey(key: string): void {
    this.completedList[key] = this.isCompleted(key) ? 0 : 1;

    this.data.setData('courseStatus', this.completedList);
  }
}

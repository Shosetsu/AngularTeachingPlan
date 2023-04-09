import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private completedList: Record<string, number> = JSON.parse(
    localStorage.getItem('courseStatus') ?? '{}'
  );

  isCompleted(key: string): boolean {
    return Boolean(this.completedList[key]);
  }

  changeKey(key: string): void {
    this.completedList[key] = this.isCompleted(key) ? 0 : 1;

    localStorage.setItem('courseStatus', JSON.stringify(this.completedList));
  }
}

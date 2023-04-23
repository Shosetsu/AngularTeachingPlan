/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: Record<string, any> = {};
  private mainKey = 'atp-data';

  constructor() {
    this.loadData();
  }

  loadData(): void {
    this.data = JSON.parse(localStorage.getItem(this.mainKey) ?? '{}');
  }

  setData(key: string, data: any): void {
    this.data[key] = data;
    localStorage.setItem(this.mainKey, JSON.stringify(this.data));
  }

  getData<T>(key: string, def: T): T {
    return this.data[key] ?? def;
  }
}

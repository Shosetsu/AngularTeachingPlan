import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: Record<string, unknown> = {};
  private mainKey = 'atp-data';

  constructor() {
    this.loadData();
  }

  loadData(): void {
    this.data = JSON.parse(localStorage.getItem(this.mainKey) ?? '{}');
  }

  setData(key: string, data: unknown): void {
    this.data[key] = data;
    localStorage.setItem(this.mainKey, JSON.stringify(this.data));
  }

  getData<T>(key: string, def: T): T {
    const data = this.data[key];
    return this.trustType<T>(data) ? data : def;
  }

  private trustType<T>(value: unknown): value is T {
    return Boolean(value);
  }
}

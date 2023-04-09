/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: Record<string, any> = {};
  private mainKey = 'atp-data';

  constructor() {
    this.data = JSON.parse(atob(localStorage.getItem(this.mainKey) ?? 'e30='));
  }

  setData(key: string, data: any): void {
    this.data[key] = data;
    localStorage.setItem(this.mainKey, btoa(JSON.stringify(this.data)));
  }

  getData<T>(key: string, def: T): T {
    return this.data[key] ?? def;
  }
}
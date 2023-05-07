import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charCode',
  pure: false,
})
export class CharCodePipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    return value
      .split('')
      .map((str) =>
        String.fromCharCode(str.charCodeAt(0) + args.reduce((p, c) => p + c, 0))
      )
      .join('');
  }
}

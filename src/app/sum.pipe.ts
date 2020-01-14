import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  pure: false,
})
export class SumPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + args[0] + args[1];
  }

}

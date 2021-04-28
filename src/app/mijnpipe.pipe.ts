import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mijnpipe'
})

export class MijnpipePipe implements PipeTransform {

  transform(value: number): number {
    return value -10;
  }
}

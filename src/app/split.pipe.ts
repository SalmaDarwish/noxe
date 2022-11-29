import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(text: string, count:number): string {
    return text.split(" ").splice(0,count).join(" ")
  }

}

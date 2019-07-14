import { Pipe, PipeTransform } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { contactModel } from './contactModel';

@Pipe({
  name: 'sort',
  pure:false
})
export class SortPipe implements PipeTransform {

  transform(array: Array<contactModel>): Array<contactModel> {

    array.sort((a, b) => {
      a
      if (a.c_name.toLowerCase()< b.c_name.toLowerCase()) {
        return -1;
      } else if (a.c_name.toLowerCase() > b.c_name.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
    
      
      return array;
    
  }
}
import { Pipe, PipeTransform } from '@angular/core';
import { contactModel } from './contactModel';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array:Array<contactModel>,searchterm) {
    if(!searchterm)
    return array;
    searchterm=searchterm.toLowerCase();
    return array.filter(ele=>{
      return ele.c_name.toLowerCase().includes(searchterm);
    });
  }

}

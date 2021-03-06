
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
// tslint:disable-next-line:class-name
export class languageFilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items) { return []; }
    if (!searchTerm) { return items; }
    searchTerm = searchTerm.toLowerCase();
return items.filter( it => {
      return it.toLowerCase().includes(searchTerm);
    });
   }
}

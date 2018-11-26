import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})


@Pipe({
  name: 'unique',
  pure: false
})

export class UniquePipeService implements PipeTransform {

  constructor() { }
   transform(value: any): any {
        if (value !== undefined && value !== null) {
            return _.uniqBy(value, 'name');
        }
        return value;
    }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  names: any[];
  languages = [];
  searchTerm: string;
  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getLanguages().subscribe((res: any[]) => {
      console.log(res);
      this.languages = res;
     const abd = [];
     // tslint:disable-next-line:no-shadowed-variable
     let element: any ;
 for (let index = 0; index < res.length; index++) {
 element = res[index].currencies[0].name;
   abd.push(element);
 }
 console.log(abd);
 function removeDuplicates(arr) {
  const unique_array = [];
  for ( let i = 0; i < arr.length; i++) {
      if (unique_array.indexOf(arr[i]) === -1) {
          unique_array.push(arr[i]);
      }
  }
  return unique_array;

}

this.names = removeDuplicates(abd);
console.log(this.names);

      });

}
}

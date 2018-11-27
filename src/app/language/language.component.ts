import { element, $ } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  names: any[];

  languages = [];
  searchTerm: string;
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {

    this.data.getLanguages().subscribe((res: any[]) => {
      // console.log(res);
      this.languages = res;
     const abd = [];
     // tslint:disable-next-line:no-shadowed-variable
     let element: any ;
 for (let index = 0; index < res.length; index++) {
 element = res[index].languages[0].name;
   abd.push(element);
 }

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
// console.log(this.names);
      });

}
 onItemClick(value) {

  language_id(this.languages, value);
  let code: string;
 // tslint:disable-next-line:no-shadowed-variable
 function language_id (res, value) {
console.log(value);
  for (let index = 0; index < res.length; index++) {
    let name_lan: any;
 name_lan = res[index].languages[0].name;
   if (name_lan === value) {

      code = (res[index].languages[0].iso639_1 );
     console.log(code);

     return code;

   }
 }}
 console.log(code);

 this.router.navigate(['/countryByLang', code]);
}

}

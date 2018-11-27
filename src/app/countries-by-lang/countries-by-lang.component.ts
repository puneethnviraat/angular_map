import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries-by-lang',
  templateUrl: './countries-by-lang.component.html',
  styleUrls: ['./countries-by-lang.component.css']
})

export class CountriesByLangComponent implements OnInit {
  countries$: Object;
  name$: string;
  constructor( private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.name$ = params.code );
    console.log(this.name$);
   }
  ngOnInit() {
    this.data.getCountriesByLang(this.name$).subscribe(
      data => this.countries$ = data);
  }
}





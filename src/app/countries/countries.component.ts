import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries$: Object;
  name$: string;
  constructor( private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.name$ = params.id );
    console.log(this.name$);
   }

  ngOnInit() {
    this.data.getCountries(this.name$).subscribe(
      data => this.countries$ = data);
  }

}

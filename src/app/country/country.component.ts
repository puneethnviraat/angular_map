import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country$: Object;
  name$: string;
  constructor( private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.name$ = params.id );
    console.log(this.name$);
   }

  ngOnInit() {
    this.data.getCountry(this.name$).subscribe(
      data => this.country$ = data);

  }

}

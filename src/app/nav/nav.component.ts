import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  languages$: Object;
  constructor( private location: Location) { }

  ngOnInit() {}

  cancel() {
    this.location.back();
  }

}

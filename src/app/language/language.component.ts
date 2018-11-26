import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languages = [];
  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getLanguages().subscribe((res: any[]) => {
      console.log(res);
      this.languages = res;
      });
      }

}









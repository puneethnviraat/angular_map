import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

 constructor(private http: HttpClient) { }
  getCountries(id) {
    return this.http.get('https://restcountries.eu/rest/v2/region/' + id);
  }
  getCountry(name) {
    return this.http.get('https://restcountries.eu/rest/v2/name/' + name + '?fullText=true' );
  }
  getLanguages() {

    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}


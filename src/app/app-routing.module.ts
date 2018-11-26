import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {CountriesComponent } from './countries/countries.component';
import {CountryComponent } from './country/country.component';
import {LanguageComponent } from './language/language.component';
import {CurrencyComponent } from './currency/currency.component';





const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'countries/:id', component: CountriesComponent},
  {path: 'country/:id', component: CountryComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'currency', component: CurrencyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

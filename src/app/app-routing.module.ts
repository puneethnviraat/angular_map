import { CountriesByCurrencyComponent } from './countries-by-currency/countries-by-currency.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {CountriesComponent } from './countries/countries.component';
import {CountryComponent } from './country/country.component';
import {LanguageComponent } from './language/language.component';
import {CurrencyComponent } from './currency/currency.component';
import { CountriesByLangComponent } from './countries-by-lang/countries-by-lang.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'countries/:id', component: CountriesComponent},
  {path: 'country/:id', component: CountryComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'currency', component: CurrencyComponent},
  {path: 'countryByLang/:code', component: CountriesByLangComponent},
  {path: 'countryByCurrency/:code', component: CountriesByCurrencyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

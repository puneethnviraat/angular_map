import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { LanguageComponent, UniquePipe } from './language/language.component';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesComponent,
    CountryComponent,
    NavComponent,
    LanguageComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

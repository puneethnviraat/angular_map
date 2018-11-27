import { languageFilterPipe } from './language/language-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { LanguageComponent } from './language/language.component';
import { CurrencyComponent } from './currency/currency.component';
import { currencyFilterPipe } from './currency/currency-filter.pipe';
import { CountriesByLangComponent } from './countries-by-lang/countries-by-lang.component';
import { CountriesByCurrencyComponent } from './countries-by-currency/countries-by-currency.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesComponent,
    CountryComponent,
    NavComponent,
    LanguageComponent,
    CurrencyComponent,
    languageFilterPipe,
    currencyFilterPipe,
    CountriesByLangComponent,
    CountriesByCurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

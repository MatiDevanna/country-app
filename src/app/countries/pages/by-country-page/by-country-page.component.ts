import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] =[];
  public initalValue: string = '';

    constructor( private countriesService: CountriesService ){}


    ngOnInit(): void {
      this.countries = this.countriesService.cacheStore.byCapital.countries;
      this.initalValue = this.countriesService.cacheStore.byCountries.term;
  }

    searchByCountry( term: string):void {

      this.countriesService.searchCountry(term)
      .subscribe( countries => {
          this.countries = countries;
      } );
    }

}

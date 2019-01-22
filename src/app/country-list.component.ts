import { Component , OnInit } from '@angular/core';
import { CountryService } from './shared/country.service';

@Component({
  selector: 'country-list',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: `<h2>Counrty List</h2>
             <ul *ngFor="let _value of countries">
              <li>{{_value.name}}</li>
             </ul>`
})
export class CountryListComponent implements OnInit {
  countries = [];

  constructor(private _countryService: CountryService){}
  ngOnInit(){
    //this._countryService.getCountries().subscribe(resCountyData => this.countries = resCountyData);
  }

}

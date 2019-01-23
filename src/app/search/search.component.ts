import { Component , OnInit } from '@angular/core';
import { CountryService } from '../shared/country.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  countries: any;
  original_countries: any;
  constructor(private _countryService: CountryService) { }
  
  ngOnInit() {
    this._countryService.getConfig().subscribe((data)=>{
      this.original_countries=data
      this.countries=this.original_countries;
    });
  }

  searchCountries(_country: string = ''){
    this.countries = this.original_countries.filter((country: any) => country.name.toLowerCase().match(_country.toLowerCase()));
  }
}


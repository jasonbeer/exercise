import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryService {
  constructor(private _http: HttpClient) {}

  getConfig() {
    return this._http.get('https://restcountries.eu/rest/v2/all');
  }
 
}

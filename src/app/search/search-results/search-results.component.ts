import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { CountryService } from '../../../app/shared/country.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() results: any;
 
  ngOnInit(){
    
  }
  

}

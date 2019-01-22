import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() searchFieldChange = new EventEmitter();   // searchFieldChange is new event sent to <app-search-form>

  constructor() { }

  ngOnInit() {
  }

  search(event: any){
    this.searchFieldChange.emit({ value: event.target.value }); // searchFieldChange is new event sent to <app-search-form>
  }

}

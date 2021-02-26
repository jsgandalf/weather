import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ɵɵsetComponentScope } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  city = '';
  myForm: any;
  constructor() { 
  }

  ngOnInit(): void { 
  }

  searchWeather() {
    this.search.emit(this.city);
  }

}

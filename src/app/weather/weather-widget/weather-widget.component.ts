import { Component, Input, OnInit } from '@angular/core';
import { Weather, WeatherReport } from '../weather-report';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  @Input() weatherReport!:WeatherReport

  constructor() { }

  ngOnInit(): void {
  }

}

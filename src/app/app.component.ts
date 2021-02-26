import { Component } from '@angular/core';
import { WeatherReport } from './weather/weather-report';
import { WeatherService } from './weather/weather-service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  weatherReport!: WeatherReport;
  constructor(private weatherService:WeatherService){}
  
  search(city: string) {
    this.weatherService.getWeatherByCityName(city)
      .subscribe((weatherReport) => {
        console.log(weatherReport);
        this.weatherReport = weatherReport;
      }, (error)=>{
        if(error.status === 404){
          alert(`Could not find weather for city ${city}`);

        } else {
          alert('Something went wrong, an error occured.')
        }
      });
  }
  
}


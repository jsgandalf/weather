import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { WeatherReport } from '../weather-report';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  
  getWeatherByCityName(name: string): Observable<WeatherReport> {
    name = name.trim();
    const options = name ?
      { 
        params: new HttpParams()
          .set('q', name)
          .set('appid', environment.weatherApiKey)
          .set('units', environment.weatherUnits)
      } : {};
    return this.http.get<WeatherReport>(environment.weatherBaseUrl, options);
  }
}

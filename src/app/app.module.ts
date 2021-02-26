import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherWidgetComponent } from './weather/weather-widget/weather-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

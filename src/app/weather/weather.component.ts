import { Component, OnInit } from '@angular/core';
import { Weather } from '../shared/models/weather.model';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: Weather;
  selectCity: string;

  citys = [
    { name: 'Moscow', nameRu: 'Москва' },
    { name: 'Novomoskovsk', nameRu: 'Новомосковск' }
  ];


  constructor(private wthr: WeatherService) {}

  ngOnInit() {
    this.search()
  }

   search(){
    this.wthr
    .getData(this.selectCity)
    .subscribe(
      (responce: any) => { 
        console.log(responce)
        this.weather = new Weather();
        this.weather.temp = responce.list[0].main.temp;
        this.weather.iconUrl = 'http://openweathermap.org/img/wn/' + responce.list[0].weather[0].icon + '@2x.png';
        this.weather.temp = Math.round(this.weather.temp - 273.15);
      }
    )   
    
  }

}

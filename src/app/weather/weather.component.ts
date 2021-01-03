import { Component, OnInit } from '@angular/core';
import { Weather } from '../shared/models/weather.model';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: Weather = new Weather();
  selectCity: string = "Novomoskovsk";


  constructor(private wthr: WeatherService) {}

  ngOnInit() {
    this.search()
  }

  search(){
    this.wthr.getData(this.selectCity).subscribe((responce: any) => {
      debugger
      this.weather.temp = responce.list[0].main.temp;
      this.weather.temp = this.weather.temp - 273.15;
      console.log(responce)
    })    
  }


  toFixed(number: any){
    return Math.round(number * 100) / 100; 
  }
}

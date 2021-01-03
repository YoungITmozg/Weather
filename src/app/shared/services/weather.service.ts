import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherService {

    constructor(private http: HttpClient) {}


    getData(cityName: string) {
        return this.http.get('http://api.openweathermap.org/data/2.5/find?q='+
        cityName + '&type=like&APPID=b9782f6db1e78c715586f24ac164b153');
    }
}
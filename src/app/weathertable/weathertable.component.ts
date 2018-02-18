import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from '../weatherdata/weatherdata.service';

@Component({
  selector: 'app-weathertable',
  templateUrl: './weathertable.component.html',
  styleUrls: ['./weathertable.component.scss']
})

export class WeathertableComponent implements OnInit {
  test = '';
  weatherData;

  constructor(private weatherDataService:WeatherdataService) { }

  ngOnInit() {
    console.log('getting some info from the service');

    this.weatherDataService.getData().subscribe((response) => {
      this.test = JSON.stringify(response);
      this.weatherData = response;
    });
  }
}

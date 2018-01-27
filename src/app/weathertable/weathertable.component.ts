import { Component, OnInit } from '@angular/core';
import { WeatherdataService} from '../weatherdata/weatherdata.service';

@Component({
  selector: 'app-weathertable',
  templateUrl: './weathertable.component.html',
  styleUrls: ['./weathertable.component.scss']
})

export class WeathertableComponent implements OnInit {
  test = '';

  constructor(private weatherDataService:WeatherdataService) { }

  ngOnInit() {
    console.log('getting some info from the service');

    this.weatherDataService.getData().subscribe((response) => {
      console.log(response);
      this.test = JSON.stringify(response['_body']);
    });
  }
}

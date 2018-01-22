import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weathertable',
  templateUrl: './weathertable.component.html',
  styleUrls: ['./weathertable.component.scss']
})
export class WeathertableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  url = 'http://192.168.1.73:8080/demo/all';

  getData = () => {
    fetch(this.url).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
      return JSON.stringify(data);
    }).catch(function() {
      console.log("Booo");
    });
  }

}

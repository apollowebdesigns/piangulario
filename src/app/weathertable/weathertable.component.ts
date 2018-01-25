import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weathertable',
  templateUrl: './weathertable.component.html',
  styleUrls: ['./weathertable.component.scss']
})

export class WeathertableComponent implements OnInit {
  test = '';

  constructor() { }

  ngOnInit() {
    this.getData().then((response) => {
      console.log(response);
      this.test = JSON.stringify(response.type);
    });
  }
  
  // url = 'http://192.168.1.73:8080/demo/all';
  url = 'https://jsonplaceholder.typicode.com/posts';

  getData() {
    return fetch(this.url);
  }
}

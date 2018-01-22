import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-weathertable',
  templateUrl: './weathertable.component.html',
  styleUrls: ['./weathertable.component.scss']
})

export class WeathertableComponent implements OnInit {

  constructor(private http: HttpClient) { }

  getHeroes (): Observable<Object> {
    return this.http.get(this.url)
  }

  ngOnInit() {
    this.getData();
  }

  model = 'hello';
  url = 'http://192.168.1.73:8080/demo/all';

  getData = () => {
    fetch(this.url).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
      this.model = JSON.stringify(data);
      return JSON.stringify(data);
    }).catch((error) => {
      console.log(error);
      console.log("Booo");
    });
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherdataService {

  constructor(private http: Http) { }

  // url = 'http://192.168.1.73:8080/demo/all';
  url = 'http://localhost:8000/stub.json';

  /**
   * returns a promise
   */
  getData() {
    return this.http.get(this.url);
  }

}

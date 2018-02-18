import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * This service collects data from a Java microservice using Spring Boot.
 * The data returned is for weather and used by the weather component.
 */
@Injectable()
export class WeatherdataService {

  constructor(private http: HttpClient) { }

  url = 'http://192.168.1.73:8080/demo/all';
  // url = 'http://localhost:8000/stub.json';

  /**
   * returns a promise
   */
  getData(): Observable<Object> {
    return this.http.get(this.url);
  }

}

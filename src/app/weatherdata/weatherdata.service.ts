import { Injectable } from '@angular/core';

@Injectable()
export class WeatherdataService {

  constructor() { }

  // url = 'http://192.168.1.73:8080/demo/all';
  url = 'http://localhost:8000/stub.json';

  /**
   * returns a promise
   */
  getData() {
    return fetch(this.url);
  }

}

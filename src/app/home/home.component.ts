import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  /**
   * Terminates server sent event and stops cart from moving
   */
  killRequest() {
    return this.http.get( "/end_motor_source");
  }



  ngOnInit() {
  }

}

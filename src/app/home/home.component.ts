import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as EventSource from 'eventsource';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // vars init
  sse; 
  sse1;

  constructor(private http: HttpClient) { }

  /**
   * Terminates server sent event and stops cart from moving
   */
  killRequest() {
    return this.http.get( "http://192.168.1.73/end_motor_source");
  }

  moveForwards() {
    this.sse = new EventSource('http://192.168.1.73/my_event_source');
    this.sse.onmessage = function(message) {
        console.log('A message has arrived!');
        // $('#output').append('<li>'+message.data+'</li>');
    }
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Custom element example app';
  count: number = null;

  constructor() {}

  handleCountChanged($event) {
    this.count = $event;
  }

}
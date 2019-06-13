import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  date: string;
  time: string;

  constructor() { }

  ngOnInit() {
    this.date = new Date().toDateString();

    setInterval(()=>{
        this.time = new Date().toTimeString();
    }, 1000);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  items: string[];

  constructor() { }

  ngOnInit() {
    this.items = [
      "separilla",
      "cola",
      "ogange lemonade",
      "fanta",
      "red bull",
      "monster",
      "sunrise",
      "ribosoma"
    ];
  }

}

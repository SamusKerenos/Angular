import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
  info: string;
  speed: number;
  acceleration: number;
  model: string;
  position: HasPosition;
  cargo: string[];
  enginLable: string;
  isFly: bolean;

  constructor() { }

  ngOnInit() {
    this.enginLable = 'START';
    this.isFly = false;

    this.info = 'stay on ground';
    this.speed = 0;
    this.acceleration = 1;
    this.model = "GH-700";
    this.position = { x: 0, y: 0, z: 0 };
    this.cargo = ["r-12", "rgh-56", "dc-21"];


  }

  fly() {
    if(this.isFly) {
      this.info = 'engin stoped';
      this.enginLable = "START";
    }
    else {
      this.info = 'engin started';
      this.enginLable = "STOP";
    }

    this.isFly = !this.isFly;
  }
}

interface HasPosition {
  x: number,
  y: number,
  z: number,
}

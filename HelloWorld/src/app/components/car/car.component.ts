import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
  maxAcceleration: number;
  minAcceleration: number;
  fieldWidth: number;

  info: string;
  speed: number;
  acceleration: number;
  model: string;
  position: HasPosition;
  cargo: string[];
  enginLable: string;
  isFly: boolean;

  constructor() { }

  ngOnInit() {
    this.maxAcceleration = 5;
    this.minAcceleration = 1;
    this.fieldWidth = 200;
    this.enginLable = 'START';
    this.isFly = false;

    this.info = 'stay on ground';
    this.speed = 0;
    this.acceleration = this.minAcceleration;
    this.model = "GH-700";
    this.position = {
      x: this.fieldWidth / 2,
      y: 0,
      z: 0
    };
    this.cargo = [
      "r-12 power cell",
      "rgh-56 engine parts",
      "dc-21 electronic components"
    ];
  }

  fly() {
    this.acceleration = this.minAcceleration;

    if(this.isFly) {
      this.info = 'engin stoped';
      this.enginLable = "START";
      this.position.y = 0;
      this.speed = 0;
    } else {
      this.info = 'engin started';
      this.enginLable = "STOP";
      this.position.y = 10;
    }

    this.isFly = !this.isFly;
  }

  accelerate(isIncreace:boolean) {
    if (this.isFly) {
      if (isIncreace) {
        this.speed = this.speed == 0
          ? this.speed = 1
          : this.speed;

        this.acceleration = this.acceleration == this.maxAcceleration
          ? this.acceleration
          : this.acceleration + 1;
      } else {
        this.acceleration = this.acceleration == this.minAcceleration
          ? this.acceleration
          : this.acceleration - 1;
      }
    } else {
      this.info = 'vehicle still stay on ground, start engin before fly';
    }
  }

  horizontalMovement(isLeft:boolean) {
    if (this.isFly) {
      if (isLeft) {
        this.position.x = this.position.x == 0
          ? this.position.x
          : this.position.x - 1;
      } else {
        this.position.x = this.position.x == this.fieldWidth
          ? this.position.x
          : this.position.x + 1;
      }
    } else {
      if (isLeft) {
        this.info = 'left door is open';
      } else {
        this.info = 'right door is open';
      }
    }
  }
}

interface HasPosition {
  x: number,
  y: number,
  z: number,
}

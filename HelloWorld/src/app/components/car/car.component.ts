import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
  maxAcceleration: number;
  minAcceleration: number;
  minHeight: number;
  maxHeight: number;
  fieldWidth: number;

  info: string;
  speed: number;
  speedIncrement: number;
  acceleration: number;
  model: string;
  position: HasPosition;
  cargo: string[];
  enginLable: string;
  isFly: boolean;

  constructor() {

  }

  ngOnInit() {
    this.maxAcceleration = 5;
    this.minAcceleration = 1;
    this.fieldWidth = 200;
    this.minHeight = 10;
    this.maxHeight = 100;
    this.isFly = false;

    this.enginLable = 'START';
    this.info = 'stay on ground';
    this.speed = 0;
    this.speedIncrement = 5;
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
    var movement;
    this.acceleration = this.minAcceleration;

    if(this.isFly) {
      this.info = 'engin stoped';
      this.enginLable = "START";
      this.position.y = 0;
      this.speed = 0;
    } else {
      this.info = 'engin started';
      this.enginLable = "STOP";
      this.position.y = this.minHeight;
    }

    this.isFly = !this.isFly;
  }

  accelerate(isIncreace:boolean) {
    if (this.isFly) {
      if (isIncreace) {
        this.acceleration = this.acceleration == this.maxAcceleration
          ? this.acceleration
          : this.acceleration + 1;
      } else {
        this.acceleration = this.acceleration == this.minAcceleration
          ? this.acceleration
          : this.acceleration - 1;
      }

      this.speed = this.speed = this.speedIncrement * this.acceleration;
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
        this.info = 'vehicle still stay on ground, start engin before sly left';
      } else {
        this.info = 'vehicle still stay on ground, start engin before sly right';
      }
    }
  }

  verticalMovement(isUp:boolean) {
    if (this.isFly) {
      if (isUp) {
        this.position.y = this.position.y == this.maxHeight
          ? this.position.y
          : this.position.y + 1;
      } else {
        this.position.y = this.position.y == this.minHeight
          ? this.position.y
          : this.position.y - 1;
      }
    } else {
      if (isUp) {
        this.info = 'vehicle still stay on ground, start engin before fly up';
      } else {
        this.info = 'vehicle still stay on ground, start engin before get down';
      }
    }
  }

  moveForvard() {
    if (this.isFly) {
      this.position.z = this.position.z + this.speed;
    }
  }

  openDoors(isLeft:boolean) {
    if (isLeft) {
      this.info = 'left door is open';
    } else {
      this.info = 'right door is open';
    }
  }

  loadItem(item: string) {
    if (!this.isFly) {
      this.cargo.push(item);
    } else {
      this.info = 'stop engin before load cargo';
    }

    return false; //if we don't return false from this function, we reload all page because we use this functuion in form
  }

  unloadItem(index: number) {
    this.cargo.splice(index, 1);
  }
}

interface HasPosition {
  x: number,
  y: number,
  z: number,
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1 = {carId:1, Description:"Nissan GTR1", brandId:1, colorId:1, modelYear:1990, dailyPrice:1200}
  car2 = {carId:2, Description:"Nissan GTR2", brandId:1, colorId:1, modelYear:1990, dailyPrice:1200}
  car3 = {carId:3, Description:"Nissan GTR3", brandId:1, colorId:1, modelYear:1990, dailyPrice:1200}
  car4 = {carId:4, Description:"Nissan GTR4", brandId:1, colorId:1, modelYear:1990, dailyPrice:1200}
  cars = [this.car1,this.car2,this.car3,this.car4]
  
  constructor() { }

  ngOnInit(): void {
  }

}

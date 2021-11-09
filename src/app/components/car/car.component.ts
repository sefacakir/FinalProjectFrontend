import { Car } from 'src/app/models/car/car';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

  cars:Car[] = []
  dataLoaded = false

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }else{
        this.getCars()
      }
    })
    
  }

  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data;
      this.dataLoaded = true
    })
  }

  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response =>{
      this.cars = response.data;
      this.dataLoaded = true
    })
  }
}

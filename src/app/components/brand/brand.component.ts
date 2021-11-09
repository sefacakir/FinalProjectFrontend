import { Brand } from 'src/app/models/brand/brand';
import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {
  
  brands:Brand[] = []
  currentBrand:Brand
  tempBrand:Brand
  currentControl:boolean = true

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data;
      console.log(response.data)
    })
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand
    this.currentControl = false
  }
  getCurrentBrandClass(brand:Brand){
    
    if(brand == this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  setCurrentControl(control:boolean){
    this.currentBrand = this.tempBrand
    this.currentControl = control
    
  }

  getAllBrandsClass(control:boolean){
    if(this.currentControl){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}

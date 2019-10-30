import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../../services/fruits.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
 public frutAndVeg:Array<any> = [];
 public zambyuxArray:Array<any> = [];
 public basket: boolean = false;
 public chengeOp: number = 1;
 public index;
 public allPrice:number = 0;
 
  constructor(private frutServ:FruitsService) { 
    this.frutAndVeg = this.frutServ.banjarArr;
  }
  
  ngOnInit() {
   
  }

  zambyux(a){
    this.zambyuxArray.unshift(a);
    this.allPrice += a.price;    
  }


  basketTogle(){
    if(this.zambyuxArray.length > 0){
      this.basket = !this.basket;
      if(this.chengeOp == 1 ){
        this.chengeOp = 0.2 
      } else {
        this.chengeOp = 1
      }
    } 
  }

  clearBasket(a){
    this.index = this.zambyuxArray.indexOf(a);
    this.zambyuxArray.splice(this.index,1);
    this.allPrice -= a.price
    if(this.zambyuxArray.length == 0){
      this.basket = !this.basket;
      this.chengeOp = 1;
    }
  }

}
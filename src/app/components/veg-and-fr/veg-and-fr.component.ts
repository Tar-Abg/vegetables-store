import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FruitsService } from '../../services/fruits.service';



@Component({
  selector: 'app-veg-and-fr',
  templateUrl: './veg-and-fr.component.html',
  styleUrls: ['./veg-and-fr.component.css'],
  providers: [ FruitsService ]
})
export class VegAndFrComponent implements OnInit {
  @Input() outFrutAndVeg:any;
  @Output() addBasket = new EventEmitter();

  avelacnelZambyux(qash, price,name) { 
    
    this.addBasket.emit({"name":name, "price":price * qash});
    this.bariq.qash = 1
  }
  
  
  
  constructor( public bariq:FruitsService) {

  }  
  ngOnInit() {
 
  }
  
 
}

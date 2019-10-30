import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { FruitsService } from 'src/app/services/fruits.service';


@Component({
  selector: 'app-fruit-item',
  templateUrl: './fruit-item.component.html',
  styleUrls: ['./fruit-item.component.css']
})
export class FruitItemComponent implements OnInit {
  id:number;
  itemObject:any;
  constructor( private router:Router, private activRout:ActivatedRoute, private service:FruitsService) { 
    this.activRout.params
    .subscribe((params)=>{
      this.id = params['id'];
      this.itemObject = this.service.foundId(this.id);

      
    });
  }


  ngOnInit() {
  }


}

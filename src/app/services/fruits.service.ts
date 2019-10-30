import { Injectable} from '@angular/core';
import { VegOrFr } from '../models/VegOrFr';


@Injectable({
  
  providedIn: 'root'
})
export class FruitsService {
  

 
  public qash = 1;

  public banjarArr:Array<any> = [new VegOrFr("Broccoli","#00BB0E","../../../assets/image/vegetables/v (1).png",400,"vg",1),
  new VegOrFr("Cabbage","#C8ECB0","../../../assets/image/vegetables/v (2).jpg",150,'vg',2),
  new VegOrFr("Peppers","#2F7300","../../../assets/image/vegetables/v (1).jpg",200,'vg',3),
  new VegOrFr("Eggplant","#210606","../../../assets/image/vegetables/v (3).jpg",300,'vg',4),
  new VegOrFr("Cucumbers","#0EB400","../../../assets/image/vegetables/v (5).jpg",400,'vg',5),
  new VegOrFr("Corn","#F5DF64","../../../assets/image/vegetables/k.jpg",400,'vg',6),
  new VegOrFr("Apples","#D32020","../../../assets/image/fruits/xnd.jpg",200,'fr',7),
  new VegOrFr("Avocados","#32AD2A","../../../assets/image/fruits/fr (6).jpg",500,'fr',8),
  new VegOrFr("Berries","#435A42","../../../assets/image/fruits/fr (2).jpg",400,'fr',9),
  new VegOrFr("Grapes","#435A42","../../../assets/image/fruits/fr (3).jpg",600,'fr',10),
  new VegOrFr("Citrus","#E4A112","../../../assets/image/fruits/fr (1).jpg",500,'fr',11),
  new VegOrFr("Stone Fruit","#E2DD32","../../../assets/image/fruits/fr (4).jpg",400,'fr',12)]


 public gumarel(){
    if(this.qash < 100){
      this.qash += 0.5;
    }
 }

public hanel(){
   if(this.qash > 0){
    this.qash -= 0.5;
   }
}

foundId(id){
  let temp;
  this.banjarArr.map((item)=>{
    if(item.id == id){
      temp = item;
      return;
    }
  });
  return temp;
}



  constructor( ) { }
}

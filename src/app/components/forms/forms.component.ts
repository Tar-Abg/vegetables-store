import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public name:string = "";
  public email:string = "";
  public password:string = "";
  public form:boolean = true;
  public info:boolean = false;
  public warning:string = "WARNING!!! your inputs is empty"
  public war:boolean = false;

  constructor() { }
  
  ngOnInit() {
  }

  public sendInfo() {
    if(this.name && this.email && this.password){
    this.form = !this.form;
    this.info = !this.info;
    } else{
     this.war = true;
    }
   }

  public closWin(){
    this.info = !this.info;
    this.war = false;
    this.form = !this.form;
    this.name = this.email = this.password = "";
  }
  public clear(){
    this.war = false;
  }


}

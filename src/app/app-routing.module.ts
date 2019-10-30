import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from  '@angular/router';

import { MainComponent } from './components/main/main.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormsComponent } from './components/forms/forms.component';
import { FruitItemComponent } from './components/fruit-item/fruit-item.component';


const MirgRout: Routes = [
  {path: 'main',  component:MainComponent},
  {path: '', redirectTo:"/main", pathMatch:"full"},
  {path: 'form', component:FormsComponent},
  {path: 'welcome', component:WelcomeComponent},
  {path: 'item/:id', component:FruitItemComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(MirgRout)
  ]
})
export class AppRoutingModule { }

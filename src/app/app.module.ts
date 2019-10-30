import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { VegAndFrComponent } from './components/veg-and-fr/veg-and-fr.component';
import { FruitsService } from './services/fruits.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormsComponent } from './components/forms/forms.component';
import { AppRoutingModule } from './app-routing.module';
import { FruitItemComponent } from './components/fruit-item/fruit-item.component';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VegAndFrComponent,
    NavBarComponent,
    WelcomeComponent,
    FormsComponent,
    FruitItemComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [ FruitsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

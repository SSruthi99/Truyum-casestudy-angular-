import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodItemInfoComponent } from './food-item-info/food-item-info.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { NewCartComponent } from './new-cart/new-cart.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { FoodServiceService } from './food-service.service';
import { MessengerService } from './messenger.service';
import { ProductService } from './product.service';
import { CartServiceService } from './cart-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    FoodItemInfoComponent,
    FoodMenuComponent,
    FoodSearchComponent,
    NewCartComponent,
    MaincontainerComponent,
    LoginComponent,
    SignupComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [FoodServiceService,MessengerService,ProductService,CartServiceService],
  bootstrap: [MaincontainerComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { LoginComponent } from './login/login.component';
import { NewCartComponent } from './new-cart/new-cart.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'newcart', component: NewCartComponent },
  { path: 'foodmenu', component: FoodMenuComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component:SignupComponent},
  {path: 'foodsearch', component:FoodSearchComponent},

  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { IFoodItem } from './ifood-item';
import { FOODITEMS } from './item-data';
import {Observable, of} from 'rxjs';
import { FoodMenuComponent } from './food-menu/food-menu.component';



@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
  
  
prodname:string;
  constructor() { }
  
  getFood_Items(): IFoodItem[]
  {
    return FOODITEMS;
  }
  search():IFoodItem
  {
    for(let i of FOODITEMS)
    {
      if(i.prodname==this.prodname)
      {
        return i;
      }
    }
  }
  
}

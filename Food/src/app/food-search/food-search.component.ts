import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../food-service.service';
import { IFoodItem } from '../ifood-item';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent implements OnInit {
  
prodname:string;
item:IFoodItem;
  constructor(private food_service:FoodServiceService) { }

  ngOnInit(): void {
    
      }
    
   search():void{
    this.item=this.food_service.search();
   }
  }



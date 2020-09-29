import { Component, OnInit, Input} from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { FoodServiceService } from '../food-service.service';
import { IFoodItem } from '../ifood-item';
import { MessengerService } from '../messenger.service';


@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  @Input() productItem: IFoodItem;
  list: IFoodItem[];

  constructor(private food_service:FoodServiceService,private msg: MessengerService,
    private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.getFood_Items();
  }
  getFood_Items():void{
    this.list=this.food_service.getFood_Items();
  }
  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

}

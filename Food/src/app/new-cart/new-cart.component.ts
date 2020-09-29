import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { CartItem } from '../cartitem';
import { IFoodItem } from '../ifood-item';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-new-cart',
  templateUrl: './new-cart.component.html',
  styleUrls: ['./new-cart.component.css']
})
export class NewCartComponent implements OnInit {
cartitems=[];
cartTotal = 0
  constructor(private msg: MessengerService,
    private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }
  handleSubscription() {
    this.msg.getMsg().subscribe((product: IFoodItem) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartitems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartitems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}

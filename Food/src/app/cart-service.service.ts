import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFoodItem } from './ifood-item';
import { cartUrl } from 'src/app/config/api';
import { CartItem } from './cartitem';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http: HttpClient) { }
  getCartItems(): Observable<CartItem[]> {
   
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].prodname === item.IFoodItem.prodname) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));
          }
        }

        return cartItems;
      })
    );
  }

  addProductToCart(product: IFoodItem): Observable<any> {
    return this.http.post(cartUrl, { product });
  }
}

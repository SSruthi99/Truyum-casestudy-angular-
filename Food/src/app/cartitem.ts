import { IFoodItem } from './ifood-item';

export class CartItem {
    prodname:string;
    price:string;
    itemtype:string;
    imageURL:string;
    active:boolean;
    freedelivery:boolean;
    qty:number;
    constructor(product: IFoodItem,qty=1) {
      this.prodname = product.prodname;
      this.price = product.price;
      this.itemtype = product.itemtype;
      this.active = product.active;
      this.freedelivery = product.freedelivery;
      this.qty=qty;
    }
  }
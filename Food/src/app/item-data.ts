import { IFoodItem } from './ifood-item';

export const FOODITEMS: IFoodItem[] = [
    { prodname: 'Sandwich',  price:'₹99',
    itemtype:'Main Course',
    imageURL:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',

    active:true,
    freedelivery:true
  },
    {  prodname:'Burger',
    price:'₹129',
    itemtype:'Main Course',
    imageURL:'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    active:true,
    freedelivery:false
  },
    {   prodname:'Pizza',
    price:'₹149',
    itemtype:'Main Course',
    imageURL:'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  active:true,
  freedelivery:false
 },
    {   prodname:'French Fries',
    price:'₹57',
    itemtype:'Starter',
    imageURL:'https://images.unsplash.com/photo-1526230427044-d092040d48dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    active:false,
    freedelivery:true},
    {  prodname:'Chocolate Brownie',
    price:'₹32',
    itemtype:'Dessert',
    imageURL:'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  active:true,
  freedelivery:true
},
   
  ];
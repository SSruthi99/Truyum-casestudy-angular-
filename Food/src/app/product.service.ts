import { Injectable } from '@angular/core';
import { IFoodItem } from './ifood-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productsUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<IFoodItem[]> {
    return this.http.get<IFoodItem[]>(productsUrl);
  }
}

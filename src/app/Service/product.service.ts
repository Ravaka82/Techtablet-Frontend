import { ProductChoice } from './../Model/ProductChoice';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Model/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient){}
  Url1=  `${this.baseUrl}/product/findAllProducts`;
  Url2=  `${this.baseUrl}/product/chooseproducts`;

  getAllProduct()
  {
    return this.http.get<Product[]>(this.Url1);
  }
  productChoose(productChoice: ProductChoice)
  {
    return this.http.post<ProductChoice>(this.Url2,productChoice);
  }
}
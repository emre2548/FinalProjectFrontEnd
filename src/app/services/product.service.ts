import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // bunun ile Backend istekte bulunabiliyoruz
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { responseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // apiUrl = "https://localhost:44392/api/Products/getall";
  apiUrl = "https://localhost:44392/api/";
  
  // HttpClient enjekte ediyoruz kullanabilmek için
  constructor(private httpClient:HttpClient) { }

  // API Bağlanıyoruz
  //Observable döndürecek
  getProducts():Observable<ListResponseModel<Product>>{
    //apiUrl sonuna eklenecek adres let değişken oluşturur
    let newPath = this.apiUrl + "products/getall"
    // gelen data ProductResponseModel modeline map et demek
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId
    // gelen data ProductResponseModel modeline map et demek
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<responseModel>{
    return this.httpClient.post<responseModel>(this.apiUrl+"products/add",product)
  }
}

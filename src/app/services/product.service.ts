import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // bunun ile Backend istekte bulunabiliyoruz
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44392/api/Products/getall";
  
  // HttpClient enjekte ediyoruz kullanabilmek için
  constructor(private httpClient:HttpClient) { }

  // API Bağlanıyoruz
  //Observable döndürecek
  getProducts():Observable<ListResponseModel<Product>>{
    // gelen data ProductResponseModel modeline map et demek
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}

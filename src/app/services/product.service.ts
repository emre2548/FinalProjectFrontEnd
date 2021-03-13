import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // bunun ile Backend istekte bulunabiliyoruz
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44392/api/Products/getall";
  
  // HttpClient enjekte ediyoruz kullanabilmek için
  constructor(private httpClient:HttpClient) { }

  // API Bağlanıyoruz
  //Observable döndürecek
  getProducts():Observable<ProductResponseModel>{
    // gelen data ProductResponseModel modeline map et demek
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}

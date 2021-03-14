import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  dataLoaded = false;
  // productResponseModel:ProductResponseModel={
  //   data : this.products,
  //   message:"",
  //   success:true
  // };

  
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    // console.log("Init çalıştı");
    this.getProducts();
  }

  // API Bağlanıyoruz
  getProducts(){
    // gelen data ProductResponseModel modeline map et demek
    // this.httpClient
    // .get<ProductResponseModel>(this.apiUrl)
    // .subscribe((response) => {
    //   this.products = response.data
    // });
    // console.log("Api request başladı");
    // observeble söndürüyr bu responseble olabilirsinndemek
    // burası asenkron çalılışıyor konsolda  request başladı motod bitti ve en son request bitti geldi asenkron çalışıyor
    this.productService.getProducts().subscribe(Response => {
      this.products = Response.data;
      // console.log("Api request bitti");
      this.dataLoaded = true;
    })
    // console.log("Metod bitti");
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  filterText="";
  // productResponseModel:ProductResponseModel={
  //   data : this.products,
  //   message:"",
  //   success:true
  // };

  
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // uygulama açılınca çalışır
    // console.log("Init çalıştı");
    // this.getProducts();

    // aşağıdaki fonksitonlardan hangisini çağıracağımızı karar vereceğiz
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })

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
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      // console.log("Api request bitti");
      this.dataLoaded = true;
    })
    // console.log("Metod bitti");
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(eesponse => {
      this.products = eesponse.data
      this.dataLoaded = true;
    })
  }

}

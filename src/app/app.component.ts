import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
  user: string = "Emre DEMİR"
  product1 = {product:1,productName:'Bardak',categoryId:1, unitPrice:5}
  product2 = {product:2,productName:'Laptop',categoryId:1, unitPrice:5}
  product3 = {product:3,productName:'Mouse',categoryId:1, unitPrice:5}
  product4 = {product:4,productName:'Keyboard',categoryId:1, unitPrice:5}
  product5 = {product:5,productName:'Camera',categoryId:1, unitPrice:5}

  products = [this.product1,this.product2,this.product3,this.product4,this.product5]
}

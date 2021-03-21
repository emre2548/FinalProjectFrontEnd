import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  // productAddForm burad bu isimde oluşturulan form html içine map ediliyor oradada aynı isimde
  productAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      // ilk değer default olmasının istediğimiz değer ikincisi required zorunluluk
      // html kısmında hangi alanlar buraya map edilecek kurallar nelerdir
      productName: ["",Validators.required],
      unitPrice: ["",Validators.required],
      unitInStock : ["",Validators.required],
      categoryId:["",Validators.required]
    })
  }

}

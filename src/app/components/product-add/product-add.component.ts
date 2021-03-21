import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  // productAddForm burad bu isimde oluşturulan form html içine map ediliyor oradada aynı isimde
  productAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder, private productService:ProductService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      // ilk değer default olmasının istediğimiz değer ikincisi required zorunluluk
      // html kısmında hangi alanlar buraya map edilecek kurallar nelerdir
      productName: ["",Validators.required],
      unitPrice: ["",Validators.required],
      unitsInStock : ["",Validators.required],
      categoryId:["",Validators.required]
    })
  }

  add(){
    // ekleme işlemi için form valid mi 
    if (this.productAddForm.valid) {
      
      // value formdaki alanların karşılığnın verir
      // bun ekleyebilmek için product haline getiriyoru let ile
      // {} boş obje oluştur dedik ve this.productAddForm.value ile bütün alanları al içne ekle dedik
      let productModel = Object.assign({},this.productAddForm.value) 
      // product modeli yolladık ilgil adrese istekte bulunduk
      /** add fonksiyonu observable onject bunun çalışması için subscribe yazıyoruz bunun bilgisi api den geliyor */
      this.productService.add(productModel).subscribe(response=>{
        // asenkron çalıştığı için bu kodlar kodu buraya alıyoruz ilgili datadan gelen herhangi bir sonucu buraya ekleyeibliriz
        console.log(response)
        // this.toastrService.success("Ürün eklendi", "Başarılı")
        // core dan gelen mesajı yazdırıyoruz
        this.toastrService.success(response.message, "Başarılı")
      },responseError=>{
        console.log(responseError)
        this.toastrService.error(responseError.error)
      })
    }else{
      // yukaroya private olarak servisleri ekledik 
      this.toastrService.error("Formunuz Eksik","Dikkat")
    }
      // console.log(productModel)
  }

}

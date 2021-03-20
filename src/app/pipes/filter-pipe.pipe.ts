import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  /** değişime uğramasını isteidğimi data Product[] giden arama değeri ise string olacak 
   * Dönüş tipi ise Prıduct[] array oluyor en sonda
  */
  transform(value: Product[], filterText:string): Product[] {
    /** filterText? filtertext varsa ilk değer true ikinci değeri "" boş bıraktık*/
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}

/**  */
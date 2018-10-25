import { Pipe, PipeTransform } from '@angular/core';
import { ShoppingComponent } from './shopping/shopping.component';
@Pipe({
  name: 'myFilterPipe'
})
export class MyFilterPipePipe implements PipeTransform {

  transform(value: any, args?: string): any {

    if(!args){
      return value;
    }
    else{
      args = args.toUpperCase();
    }
    return value.filter(items=>{
      if(items.classification == null || items.country == null || items.type == null){
        if(items.productName.toUpperCase().includes(args) == true){
          return  items.productName;
        }   
      }
      else if(items.productName.toUpperCase().indexOf(args) >= 0 ||
        items.classification.className.toUpperCase().indexOf(args) >=0 ||
        items.country.countryName.toUpperCase().indexOf(args) >=0 ||
        items.type.typeName.indexOf(args) >=0 ){
        return items.productName;
      }
    })
  }
}

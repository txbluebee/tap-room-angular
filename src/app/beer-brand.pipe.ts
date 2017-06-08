import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "beerBrand",
  pure: false
})


export class BeerBrandPipe implements PipeTransform {
  transform(input: Keg[], filterByBeerBrand) {
    var output: Keg[] = [];
    if(filterByBeerBrand === "allBrands") {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
      return output;
    } else {
      for (var i = 0; i < input.length; i++) {
        if (input[i].brand === filterByBeerBrand) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}

import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "remainingPints",
  pure: false
})


export class RemainingPintsPipe implements PipeTransform {
  transform(input: Keg[], filterByBeerLeve) {
    var output: Keg[] = [];
    if(filterByBeerLeve === "allKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints > 120) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (filterByBeerLeve === "lowBeer") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints <= 120) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}

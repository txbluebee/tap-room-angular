import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "remainingPints",
  pure: false
})


export class RemainingPintsPipe implements PipeTransform {
  transform(input: Keg[], filterByBeerLevel) {
    var output: Keg[] = [];
    if(filterByBeerLevel === "allKegs") {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
      return output;
    } else if (filterByBeerLevel === "lowBeer") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints <= 120) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}

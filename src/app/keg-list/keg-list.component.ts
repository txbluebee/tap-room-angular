import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent{
  @Input() kegList: Keg[];
  @Output() editKegSender = new EventEmitter;
  @Output() sellPintSender = new EventEmitter;

  filterByBeerLevel: string = "allKegs"
  filterByBeerBrand: string = "allBrands"

  editKeg(keg){
    this.editKegSender.emit(keg);
  }

  sellPint(keg){
    this.sellPintSender.emit(keg);
  }

  onChange(beerLevelOption) {
    this.filterByBeerLevel = beerLevelOption;
  }

  onChangeBeerBrand(beerBrandOption){
    this.filterByBeerBrand = beerBrandOption;
  }

  priceColor(keg) {
    if (keg.price > 5) {
      return 'text-danger';
    } else {
      return 'text-primary';
    }
  }

  strongBeer(keg) {
    if (keg.abv > 7) {
      return 'strong-beer'
    }
  }

}

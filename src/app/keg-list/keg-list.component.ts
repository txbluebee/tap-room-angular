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

  editKeg(keg){
    this.editKegSender.emit(keg);
  }

  sellPint(keg){
    this.sellPintSender.emit(keg);
  }

  onChange(beerLevelOption) {
    this.filterByBeerLevel = beerLevelOption;
  }
}

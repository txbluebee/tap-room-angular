import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent{
  @Output() newKegSender = new EventEmitter;

  submitNewKeg(name: string, brand: string, price: number, abv: number) {
    var newKeg = new Keg(name, brand, price, abv)
    this.newKegSender.emit(newKeg)
  }
}

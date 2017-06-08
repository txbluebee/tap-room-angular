import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedKeg = null;
  kegList: Keg[] = [
    new Keg('Brune', 'Westmalle', 6, 7),
    new Keg('Tremens', 'Delirium', 5, 8.5),
    new Keg('African Amber', 'Mac & Jacks', 5, 5.2),
    new Keg('Blueberry Kambucha', 'Mystique', 5, 7.2),
    new Keg('Mischief Maker', 'Schilling', 4, 5),
    new Keg('Dystopian State', 'Entropy', 7, 10.5),
    new Keg('Bellingham Blonde', 'Boundary Bay', 5, 5.1),
    new Keg('Goose IPA', 'Goose Island', 6, 5.9),
    new Keg('Old Chub Nitro', 'Oskar Blues', 6, 6.9)
  ];

  addNewKeg(newKeg: Keg) {
    this.kegList.push(newKeg);
  }

  editKeg(keg){
    if(this.selectedKeg === keg) {
      this.selectedKeg = null;
    }
    else {
      this.selectedKeg = keg;
    }
  }
  finishUpdate(){
    this.selectedKeg = null;
  }

  sellPint(keg){
    keg.pints = keg.pints - 1;
  }
}

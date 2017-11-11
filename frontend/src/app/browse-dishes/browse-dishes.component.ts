import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-browse-dishes',
  templateUrl: './browse-dishes.component.html',
  styleUrls: ['./browse-dishes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BrowseDishesComponent implements OnInit {
  dishes: Array<any>

  constructor() {
    this.dishes = [
      {name: 'Pierogi', ingridients: ['Mąka', 'Syr', 'Woda']},
      {name: 'Schabowy', ingridients: ['Mienso', 'Zimnioki', 'Kiszone ogurasy']},
      {name: 'Mielony', ingridients: ['Miensko', 'Kapusta', 'Pyry']},
      {name: 'Rosół', ingridients: ['Woda', 'Woda', 'Kostka rosolowa']},
      {name: 'Pierogi', ingridients: ['Mąka', 'Syr', 'Woda']}
    ]
  }

  ngOnInit() {
  }

}

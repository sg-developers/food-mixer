import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DishComponent implements OnInit {
  @Input() dish: Object;
  constructor() { }

  ngOnInit() {
  }

}

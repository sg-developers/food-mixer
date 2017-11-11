import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IngredientService } from '../services/ingredient-service.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IngredientListComponent implements OnInit {

  ingredients: Observable<String[]>;

  constructor(private ingredientsService:IngredientService) { }

  ngOnInit() {
    this.ingredients = this.ingredientsService.getIngredientsStream();
  }

  removeIngredient(ingredientToRemove: string) {
    this.ingredientsService.removeIngredient(ingredientToRemove);
  }

}

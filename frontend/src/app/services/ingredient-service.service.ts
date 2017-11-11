import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class IngredientService {

  ingredients: Array<string> = [];
  ingredientsStream = new Subject<string[]>();

  constructor() {
    // Mock data
    this.ingredients.push("Bread");
    this.ingredients.push("Butter");
    this.ingredients.push("Ketchup");
  }

  addIngredient(ingredient: string){
    this.ingredients.push(ingredient);
  }

  removeIngredient(ingredientToRemove: string){
    this.ingredients = this.ingredients.filter(ingredient => {
      return ingredient !== ingredientToRemove;
    });

    this.ingredientsStream.next(this.ingredients);
  }

  getIngredientsStream() {
    return Observable.from(this.ingredientsStream).startWith(this.ingredients);
  }

}

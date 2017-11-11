import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IngredientService } from '../services/ingredient-service.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddIngredientComponent implements OnInit {

  newIngredient: string;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
  }

  addIngredientToList(){
    this.ingredientService.addIngredient((this.newIngredient));
    this.newIngredient = "";
  }
}

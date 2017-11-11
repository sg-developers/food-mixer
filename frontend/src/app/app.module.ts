import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BrowseDishesComponent } from './browse-dishes/browse-dishes.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { DishComponent } from './dish/dish.component';

import { IngredientService } from './services/ingredient-service.service';

const routesConfig: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchRecipeComponent},
  {path: 'browse', component: BrowseDishesComponent},
  {path: '**', redirectTo: 'search', pathMatch: 'full'}
];

const routerModule = RouterModule.forRoot(routesConfig, {
  enableTracing: true,
  useHash: true
});

@NgModule({
  declarations: [
    AppComponent,
    SearchRecipeComponent,
    NavigationBarComponent,
    AppComponent,
    DishComponent,
    BrowseDishesComponent,
    AddIngredientComponent,
    IngredientListComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    routerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    IngredientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AddIngridientComponent } from './add-ingridient/add-ingridient.component';
import { DishComponent } from './dish/dish.component';

const routesConfig: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchRecipeComponent},
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
    AddIngridientComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

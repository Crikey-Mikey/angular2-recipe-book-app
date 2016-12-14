import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>();

	private recipes: Recipe[] = [
    new Recipe('burger','tasty', 'https://s-media-cache-ak0.pinimg.com/564x/ec/6a/be/ec6abe1aa414e6cdc9e379494121b78e.jpg', [
    	new Ingredient('French Fries', 2),
    	new Ingredient('Pork Meat', 1)
	]),
    new Recipe('salad','ok', 'http://pulsefitness.com.au/wordpress/wp-content/uploads/2014/11/salad.png', [])
  ];

  constructor(private http: Http) { }

  getRecipes() {
  	return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-390a1.firebaseio.com/recipes.json', body, { headers: headers });
  }

  fetchData () {
    return this.http.get('https://recipebook-390a1.firebaseio.com/recipes.json')
    .map( (response: Response) => response.json() )
    .subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
        this.recipesChanged.emit(this.recipes);
      }
    );
  }

}

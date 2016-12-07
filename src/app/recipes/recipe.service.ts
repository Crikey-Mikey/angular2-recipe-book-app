import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [
    new Recipe('burger','tasty', 'https://s-media-cache-ak0.pinimg.com/564x/ec/6a/be/ec6abe1aa414e6cdc9e379494121b78e.jpg', [
    	new Ingredient('French Fries', 2),
    	new Ingredient('Pork Meat', 1)
	]),
    new Recipe('salad','ok', 'http://pulsefitness.com.au/wordpress/wp-content/uploads/2014/11/salad.png', [])
  ];

  constructor() { }

  getRecipes() {
  	return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

}

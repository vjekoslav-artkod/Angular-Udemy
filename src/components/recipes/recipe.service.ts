import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty schnitzel',
      'https://coolinarika.azureedge.net/images/_variations/9/3/93a718b32e2cf2da649f5ff741838611_header.jpg?v=11',
      [new Ingredient('meat', 1), new Ingredient('fries', 18)]
    ),
    new Recipe(
      'Buzara',
      'Škampi na buzaru',
      'https://dobartek.spar.hr/files/g/1-56/700x390-4/Skampi-na-buzaru_02.jpg',
      [new Ingredient('škampi', 4), new Ingredient('pecivo', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}

import { Ingredient } from '../../app/shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService {
  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];

  updatedIngredient = [...this.ingredients];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient) {
    this.updatedIngredient.push(ingredient);
    this.ingredientChanged.next(this.updatedIngredient);
  }

  addIngredients(ingredents: Ingredient[]) {
    this.ingredients.push(...ingredents);
    this.ingredientChanged.next(this.updatedIngredient);
  }
}

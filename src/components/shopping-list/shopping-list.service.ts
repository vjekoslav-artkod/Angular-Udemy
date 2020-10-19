import { Ingredient } from '../../app/shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];

  updatedIngredient = [...this.ingredients];

  getIngredients() {
    return this.updatedIngredient.slice();
  }

  getIndgredient(index: number) {
    return this.updatedIngredient[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.updatedIngredient.push(ingredient);
    this.ingredientChanged.next(this.updatedIngredient);
  }

  addIngredients(ingredents: Ingredient[]) {
    this.updatedIngredient.push(...ingredents);
    this.ingredientChanged.next(this.updatedIngredient);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.updatedIngredient[index] = newIngredient;
    console.log();
    console.log(this.updatedIngredient, 'updated');
    this.ingredientChanged.next(this.updatedIngredient);
  }

  deleteIngredient(index: number) {
    this.updatedIngredient.splice(index, 1);
    this.ingredientChanged.next(this.updatedIngredient);
  }
}

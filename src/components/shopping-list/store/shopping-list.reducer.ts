import { Ingredient } from '../../../app/shared/ingredient.model';
import * as ShoppingActions from './shopping-list.actions';

const INITIAL_STATE = {
  ingredients: [new Ingredient('Apple', 5), new Ingredient('Tomatoes', 10)],
};

export function shoppingListReducer(state = INITIAL_STATE, action: ShoppingActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
      case ShoppingActions.ADD_INGREDIENTS :
          return{
        ...state, 
        ingredients : [...state.ingredients, ...action.payload]
      };
      default : 
      return state;
  }
}

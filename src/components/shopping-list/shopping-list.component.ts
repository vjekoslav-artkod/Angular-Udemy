import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<{ingredients : Ingredient[]}> ;
  private igChanged: Subscription;

  constructor(private shoppingListService: ShoppingService, private store : Store<{shoppingList : {ingredients : Ingredient[]}}>) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  /*   this.ingredients = this.shoppingListService.getIngredients();
    this.igChanged = this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    ); */
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
   /*  this.igChanged.unsubscribe(); */
  }
}

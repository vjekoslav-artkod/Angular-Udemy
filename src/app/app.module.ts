import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { RecipesComponent } from 'src/components/recipes/recipes.component';
import { RecipeItemComponent } from 'src/components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from 'src/components/recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from 'src/components/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from 'src/components/recipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from 'src/components/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from 'src/components/shopping-list/shopping-list.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from 'src/components/shopping-list/shopping-list.service';
import { RecipeEditComponent } from 'src/components/recipes/reicpe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    DropdownDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ShoppingService],
  bootstrap: [AppComponent],
})
export class AppModule {}

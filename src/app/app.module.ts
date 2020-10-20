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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from 'src/components/shopping-list/shopping-list.service';
import { RecipeEditComponent } from 'src/components/recipes/reicpe-edit/recipe-edit.component';
import { RecipeService } from 'src/components/recipes/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from 'src/components/auth/auth.components';
import { SpinnerComponent } from 'src/components/loading-spinner/loading-spinner.component';

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
    DropdownDirective,
    AuthComponent, 
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ShoppingService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}

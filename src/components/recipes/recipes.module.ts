
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from 'src/app/shared/dropdown.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesRoutingModule } from './recipes-routing.model';
import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './reicpe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [RouterModule, ReactiveFormsModule, RecipesRoutingModule, SharedModule],
})
export class RecipesModule {}

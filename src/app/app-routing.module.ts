import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from 'src/components/recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from 'src/components/recipes/recipes.component';
import { ShoppingListComponent } from 'src/components/shopping-list/shopping-list.component';
import { AppComponent } from './app.component';
import { RecipeStartComponent } from 'src/components/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from 'src/components/recipes/reicpe-edit/recipe-edit.component';
import { RecipesResolverService } from 'src/components/recipes/recipe-resolver.service';
import { AuthComponent } from 'src/components/auth/auth.components';
import { AuthGuard } from 'src/components/auth/auth.guard';
import { RecipesRoutingModule } from 'src/components/recipes/recipes-routing.model';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  {path : 'auth', component : AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

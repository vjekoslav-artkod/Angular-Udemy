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

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  {path : 'auth', component : AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

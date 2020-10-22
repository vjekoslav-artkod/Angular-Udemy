import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () =>
      import('../components/recipes/recipes.module').then(
        (m) => m.RecipesModule
      ),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('../components/shopping-list/shopping.module').then(
        (m) => m.ShoppingListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

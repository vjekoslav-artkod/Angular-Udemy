import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from 'src/components/auth/auth-interceptor.service';
import { RecipeService } from 'src/components/recipes/recipe.service';
import { ShoppingService } from 'src/components/shopping-list/shopping-list.service';

@NgModule({
providers : [
    ShoppingService, 
    RecipeService,
    {
        provide : HTTP_INTERCEPTORS,
        useClass : AuthInterceptorService,
        multi : true
    }
]
})
export class CoreModule{

}
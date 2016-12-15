import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { CoreModule } from './core.module';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    CoreModule
  ],
  providers: [RecipeService,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

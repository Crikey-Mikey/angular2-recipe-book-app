import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { shoppingListRouting } from "./shopping-list.routing";

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';

@NgModule({
	declarations: [ShoppingListComponent,ShoppingListAddComponent],
	imports: [FormsModule, SharedModule, shoppingListRouting]
})

export class ShoppingListModule {}
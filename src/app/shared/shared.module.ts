import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This module would make much more sence if using multiple components or directives

@NgModule({
	exports: [CommonModule]
})

export class SharedModule {}
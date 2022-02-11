import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
	declarations: [],
	imports: [
		CommonModule
	]
})
export class ArrayUtilsModule { }

declare global {
	interface Array<T> {
		removeDups(): Array<T>;
	}
}

Array.prototype.removeDups = function () {
	return [...new Set(this)];
}
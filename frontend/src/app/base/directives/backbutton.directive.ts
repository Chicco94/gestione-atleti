import { Directive, HostListener } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Directive({
	selector: '[backButton]'
})
export class BackButtonDirective {

	constructor(private navigation:NavigationService) { }

	@HostListener('click')
	back(): void {
		console.log("back")
		this.navigation.back()
	}
}

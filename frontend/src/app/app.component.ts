import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'frontend';
	currentUser: any;

	constructor(
			private router: Router,
			private authenticationService: AuthenticationService
	) {
			this.authenticationService.currentUser.subscribe((x:any) => this.currentUser = x);
	}

	logout() {
		this.authenticationService.logout();
		this.router.navigate(['/login']);
}
}

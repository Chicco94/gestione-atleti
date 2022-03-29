import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	username:string='';
	password:string='';
	returnUrl:string='';

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private authenticationService: AuthenticationService) { 
			// redirect to home if already logged in
			if (this.authenticationService.currentUserValue) { 
					this.router.navigate(['/']);
			}}

	ngOnInit(): void {				
		// get return url from route parameters or default to '/'
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	login():void{
		this.authenticationService.login(this.username, this.password)
	}

}

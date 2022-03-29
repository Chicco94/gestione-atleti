import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Test } from '../models/test.model';

@Injectable({
	providedIn: 'root'
})
export class TestService {
	constructor(private socket: Socket,private router:Router) {
		Object.setPrototypeOf(this, TestService.prototype);
	}

	fetchTests(){this.socket.emit('fetchTests');}
	addTest(test:Test){this.socket.emit('addTest',test);}
	updateTest(test:Test){this.socket.emit('updateTest',test);}
	deleteTest(id:number){this.socket.emit('deleteTest',id);}
	getTest(id:number){this.socket.emit('getTest',id);}

	OnFetchTests() {return this.socket.fromEvent('fetchTests');}
	OnGetTest() {return this.socket.fromEvent('getTest');}

	goToTest(id:number){
			this.router.navigate(['/gestione/gestioneTest', id]);
	}
}

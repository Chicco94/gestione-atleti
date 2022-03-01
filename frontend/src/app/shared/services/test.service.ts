import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Test } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
	constructor(private socket: Socket) {
		Object.setPrototypeOf(this, TestService.prototype);
	}



	fetchTests(){this.socket.emit('fetchTests');}
	addTest(atleta:Test){this.socket.emit('addTest',atleta);}
	updateTest(atleta:Test){this.socket.emit('updateTest',atleta);}
	deleteTest(id:number){this.socket.emit('deleteTest',id);}
	getTest(id:number){this.socket.emit('getTest',id);}

	OnFetchTests() {return this.socket.fromEvent('fetchTests');}
	OnGetTest() {return this.socket.fromEvent('getTest');}
}

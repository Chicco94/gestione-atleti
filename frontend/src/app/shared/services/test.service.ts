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

	fetchTests(){
		this.socket.emit('fetchTests');
	}
	OnFetchTests() {
		return this.socket.fromEvent('fetchTests');
	}
}

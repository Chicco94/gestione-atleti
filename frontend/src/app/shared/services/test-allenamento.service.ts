import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Test } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestAllenamentoService {

  constructor(private socket: Socket) {
		Object.setPrototypeOf(this, TestAllenamentoService.prototype);
	}


	getTestAllenamentoByAllenamento(idallenamento:number){
		this.socket.emit('getTestAllenamentoByAllenamento',idallenamento);
	}
	setTestToAllenamento(idallenamento:number, lista_test:Test[]){
		this.socket.emit('setTestToAllenamento',{idallenamento:idallenamento,lista_test:lista_test});
	}
	OnGetTestAllenamentoByAllenamento() {return this.socket.fromEvent('getTestAllenamentoByAllenamento');}
}

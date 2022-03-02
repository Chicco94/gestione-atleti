import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class TestAllenamentoService {

  constructor(private socket: Socket) {
		Object.setPrototypeOf(this, TestAllenamentoService.prototype);
	}


	getTestAllenamentoByAllenamento(idallenamento:number){
		console.log(idallenamento);
		this.socket.emit('getTestAllenamentoByAllenamento',idallenamento);
	}
	OnGetTestAllenamentoByAllenamento() {return this.socket.fromEvent('getTestAllenamentoByAllenamento');}
}

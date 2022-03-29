import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Atleta } from '../models/atleta.model';

@Injectable({
	providedIn: 'root'
})
export class AtletaAllenamentoService {

	constructor(private socket: Socket) {
		Object.setPrototypeOf(this, AtletaAllenamentoService.prototype);
	}
	
	getAtletaAllenamentoByAllenamento(idallenamento:number){
		this.socket.emit('getAtletaAllenamentoByAllenamento',idallenamento);
	}
	setAtletaToAllenamento(idallenamento:number, lista_atleti:number[]){
		this.socket.emit('setAtletaToAllenamento',{idallenamento:idallenamento,lista_atleti:lista_atleti});
	}
	OnGetAtletaAllenamentoByAllenamento() {return this.socket.fromEvent('getAtletaAllenamentoByAllenamento');}

}

import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Allenamento } from '../models/allenamento.model';

@Injectable({
	providedIn: 'root'
})
export class AllenamentoService {
	constructor(protected socket: Socket) {
		Object.setPrototypeOf(this, AllenamentoService.prototype);
	}

	fetchAllenamenti(){this.socket.emit('fetchAllenamenti');}
	addAllenamento(allenamento:Allenamento){this.socket.emit('addAllenamento',allenamento);}
	buildAllenamento(idallenamento:number){this.socket.emit('buildAllenamento',idallenamento);}
	updateAllenamento(allenamento:Allenamento){this.socket.emit('updateAllenamento',allenamento);}
	deleteAllenamento(id:number){this.socket.emit('deleteAllenamento',id);}
	getAllenamento(id:number){this.socket.emit('getAllenamento',id);}

	OnFetchAllenamenti() {return this.socket.fromEvent('fetchAllenamenti');}
	OnGetAllenamento() {return this.socket.fromEvent('getAllenamento');}
}

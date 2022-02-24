import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Atleta } from 'src/app/shared/models/atleta.model';

@Injectable({
	providedIn: 'root'
})
export class AtletaService {
	constructor(private socket: Socket) {
		Object.setPrototypeOf(this, AtletaService.prototype);
	}

	fetchAtleti(){this.socket.emit('fetchAtleti');}
	addAtleta(atleta:Atleta){this.socket.emit('addAtleta',atleta);}
	updateAtleta(atleta:Atleta){this.socket.emit('updateAtleta',atleta);}
	deleteAtleta(id:number){this.socket.emit('deleteAtleta',id);}
	getAtleta(id:number){this.socket.emit('getAtleta',id);}

	OnFetchAtleti() {return this.socket.fromEvent('fetchAtleti');}
	OnGetAtleta() {return this.socket.fromEvent('getAtleta');}
}
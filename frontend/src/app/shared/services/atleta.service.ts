import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Atleta } from 'src/app/shared/models/atleta.model';

@Injectable({
	providedIn: 'root'
})
export class AtletaService {
	public atleti$ = this.socket.fromEvent<Atleta[]>('atleti');
	list:Atleta[] = [];
	constructor(private socket: Socket) {
		Object.setPrototypeOf(this, AtletaService.prototype);
	}

	fetchAtleti(){
		console.log("fetchAtleti")
		this.socket.emit('fetchAtleti');
	}
	OnFetchAtleti() {
		return this.socket.fromEvent('fetchAtleti');
	}

	public getAtleta(id:number):Atleta{
		return this.list.find((athlete:Atleta) => athlete.id == id) || new Atleta();
	}
}
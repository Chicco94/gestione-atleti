import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Athlete } from 'src/app/shared/models/athlete.model';

@Injectable({
	providedIn: 'root'
})
export class AthleteService {
	public atleti$ = this.socket.fromEvent<Athlete[]>('atleti');
	list:Athlete[] = [];
	constructor(private socket: Socket) {
		Object.setPrototypeOf(this, AthleteService.prototype);
	}

	fetchAtleti(){
		console.log("fetchAtleti")
		this.socket.emit('fetchAtleti');
	}
	OnFetchAtleti() {
		return this.socket.fromEvent('fetchAtleti');
	}

	public getAtleta(id:number):Athlete{
		return this.list.find((athlete:Athlete) => athlete.id == id) || new Athlete();
	}
}
import { Injectable } from '@angular/core';
import { Athlete } from 'src/app/shared/models/athlete.model';

@Injectable({
	providedIn: 'root'
})
export class AthleteService {
	list:Athlete[] = [];
	constructor() {
		Object.setPrototypeOf(this, AthleteService.prototype);
	}

	public getAthlete(id:string):Athlete{
		return this.list.find((athlete:Athlete) => athlete.id == id) || new Athlete();
	}
}
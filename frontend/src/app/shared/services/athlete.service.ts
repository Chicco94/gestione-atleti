import { Injectable } from '@angular/core';
import { SexEnum } from 'src/app/base/models/enumerations';
import { Athlete } from 'src/app/shared/models/athlete.model';

@Injectable({
	providedIn: 'root'
})
export class AthleteService {
	list:Athlete[] = [];
	constructor() {
		Object.setPrototypeOf(this, AthleteService.prototype);
		let a1 = new Athlete();
		a1.name = "Enrico";
		a1.surname = "Cominato";
		a1.sex = SexEnum.male;
		a1.date_of_birth = new Date("1994-02-07");
		let a2 = new Athlete();
		a2.name = "Eleonora";
		a2.surname = "Barcaro";
		a2.sex = SexEnum.female;
		a2.date_of_birth = new Date("2008-10-10");
		for (let i=0;i<100;i++){
			this.list.push(a1);
			this.list.push(a2);
		}
	}

	public getAllAthletes():Athlete[]{
		return this.list;
	}
	public getAthlete(id:number):Athlete{
		return this.list.find((athlete:Athlete) => athlete.id == id) || new Athlete();
	}
}
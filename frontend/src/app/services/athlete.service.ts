import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseDao } from '../daos/base.dao';
import { Athlete } from '../models/athlete.model';
import { BaseService } from './base.service';

@Injectable({
	providedIn: 'root'
})
export class AthleteService extends BaseService<Athlete> {
	constructor(private localhttp:HttpClient) {
		super(new BaseDao(localhttp,Athlete,"Athlete/"));
		Object.setPrototypeOf(this, AthleteService.prototype);
	}

	public getAthlete(id:string):Athlete{
		return this.list.find((athlete:Athlete) => athlete.id == id);
	}
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseDao } from '../daos/base.dao';
import { AthleteCompetition } from '../models/athleteCompetition.model';
import { BaseService } from './base.service';

@Injectable({
	providedIn: 'root'
})
export class AthleteCompetitionService extends BaseService<AthleteCompetition>  {

	constructor(private localhttp:HttpClient) {
		super(new BaseDao(localhttp,AthleteCompetition,"AthleteCompetition/"));
		Object.setPrototypeOf(this, AthleteCompetitionService.prototype);
	}

	public getAthleteCompetitionByAthlete(idathlete:string):AthleteCompetition[]{
		return this.list.filter((item:AthleteCompetition) => item.idathlete == idathlete);
	}
}
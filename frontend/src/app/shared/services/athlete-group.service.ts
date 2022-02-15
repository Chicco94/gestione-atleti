import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseDao } from '../../base/daos/base.dao';
import { AthleteGroup } from '../../models/athleteGroup.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AthleteGroupService extends BaseService<AthleteGroup>  {

	constructor(private localhttp:HttpClient) {
		super(new BaseDao(localhttp,AthleteGroup,"AthleteCompetition/"));
		Object.setPrototypeOf(this, AthleteGroupService.prototype);
	}

	public getAthleteGroupByAthlete(idathlete:string):AthleteGroup[]{
		return this.list.filter((item:AthleteGroup) => item.idathlete == idathlete);
	}
}

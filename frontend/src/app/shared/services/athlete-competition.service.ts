import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseDao } from '../../base/daos/base.dao';
import { AtletaCompetition } from '../models/athleteCompetition.model';
import { BaseService } from './base.service';

@Injectable({
	providedIn: 'root'
})
export class AtletaCompetitionService extends BaseService<AtletaCompetition>  {

	constructor(private localhttp:HttpClient) {
		super(new BaseDao(localhttp,AtletaCompetition,"AtletaCompetition/"));
		Object.setPrototypeOf(this, AtletaCompetitionService.prototype);
	}

	public getAtletaCompetitionByAtleta(idathlete:string):AtletaCompetition[]{
		return this.list.filter((item:AtletaCompetition) => item.idathlete == idathlete);
	}
}
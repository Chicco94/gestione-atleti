import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseDao } from '../../base/daos/base.dao';
import { AtletaGroup } from '../../models/athleteGroup.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AtletaGroupService extends BaseService<AtletaGroup>  {

	constructor(private localhttp:HttpClient) {
		super(new BaseDao(localhttp,AtletaGroup,"AtletaCompetition/"));
		Object.setPrototypeOf(this, AtletaGroupService.prototype);
	}

	public getAtletaGroupByAtleta(idathlete:string):AtletaGroup[]{
		return this.list.filter((item:AtletaGroup) => item.idathlete == idathlete);
	}
}

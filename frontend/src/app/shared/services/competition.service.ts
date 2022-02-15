import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseDao } from '../../base/daos/base.dao';
import { Competition } from '../models/competition.model';
import { BaseService } from './base.service';

@Injectable({
	providedIn: 'root'
})
export class CompetitionService extends BaseService<Competition> {
	
	constructor(private localhttp:HttpClient) {
		super(new BaseDao(localhttp,Competition,"Competition/"));
		Object.setPrototypeOf(this, CompetitionService.prototype);
	}

	public getCompetition(id:string):Competition{
		return this.list.find((item:Competition) => item.id == id);
	}
}
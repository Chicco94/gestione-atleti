import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseDao } from '../daos/base.dao';
import { Training } from '../models/training.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingService  extends BaseService<Training> {

	constructor(private localhttp:HttpClient) {
		super(new BaseDao(localhttp,Training,"Training/"));
		Object.setPrototypeOf(this, TrainingService.prototype);
	}

	public getGroup(id:string):Training{
		return this.list.find((item:Training) => item.id == id);
	}
}

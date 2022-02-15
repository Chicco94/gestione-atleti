import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseDao } from '../../base/daos/base.dao';
import { Group } from '../models/group.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService extends BaseService<Group> {
	
	constructor(private localhttp:HttpClient) {
		super(new BaseDao(localhttp,Group,"Group/"));
		Object.setPrototypeOf(this, GroupService.prototype);
	}

	public getGroup(id:string):Group{
		return this.list.find((item:Group) => item.id == id);
	}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription, Observable, throwError } from 'rxjs';
import { Base } from '../models/base.model';
import { tap, catchError, map } from 'rxjs/operators';
import { BaseDao } from '../daos/base.dao';

@Injectable({
	providedIn: 'root'
})
export class BaseService<Model extends Base> {
	list:Model[] = [];
	protected listObservable: Observable<Model>;
	protected suburl: string = "";
	public download_completed: boolean;

	constructor(private dao:BaseDao<Model>) {}



	public find(){
		return this.dao.get().subscribe( 
			(data:Model[]) => {this.list = data},
			(error) => { console.error(error) },
			() => { this.download_completed=true; }
		);
	}
	

	public save(object:Model){
		return this.dao.post(object).toPromise()
	}

	/**
	 * @author Enrico
	 * @param newItem new element to add in list
	 * @description if element already in list, it updates it
	 */
	public push(newItem:Model){
		let itemToUpdate:Model = this.list.find((item) => item.equal(newItem) );
		if (itemToUpdate) {
			let index = this.list.indexOf(itemToUpdate);
			this.list[index] = newItem;
			console.info("updated item")
		} else {
			this.list.push(newItem);
			console.info("pushed new item")
		}
		return Promise.resolve(newItem);
	}

	public saveAndPush(newItem){
		this.save(newItem).then(
			(data) => { return this.push(data)}
			,(error) => {return Promise.reject(error)}
		)
	}
}

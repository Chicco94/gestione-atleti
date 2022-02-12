import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Base } from '../models/base.model';
import { BaseDao } from '../daos/base.dao';

@Injectable({
	providedIn: 'root'
})
export class BaseService<Model extends Base> {
	list:Model[] = [];
	protected listObservable: Observable<Model> = new Observable<Model>();
	protected suburl: string = "";
	public download_completed: boolean = false;

	constructor(private dao:BaseDao<Model>) {}



	public find(){
		return this.dao.get().subscribe( 
			(data:Model[]) => {this.list = data},
			(error) => { console.error(error) },
			() => { this.download_completed=true; }
		);
	}
	

	public save(object:Model){
		return this.dao.post(object)
	}

	/**
	 * @author Enrico
	 * @param newItem new element to add in list
	 * @description if element already in list, it updates it
	 */
	public push(newItem:Model){
		let itemToUpdate:Model|undefined = this.list.find((item) => item.equal(newItem) );
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

	public saveAndPush(newItem:Model){
	}
}

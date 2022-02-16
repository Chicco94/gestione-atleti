import { Injectable } from '@angular/core';
import { Test } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  list:Test[] = [];
	constructor() {
		Object.setPrototypeOf(this, TestService.prototype);
		let a1 = new Test();
		a1.descr = "30 metri";
    	a1.gruppo = "corsa veloce";
		let a2 = new Test();
		a2.descr = "lungo da fermo";
    	a2.gruppo = "esplosività";
		for (let i=0;i<100;i++){
			this.list.push(a1);
			this.list.push(a2);
		}
	}

	public getAllTests():Test[]{
		return this.list;
	}
	public getTest(id:number):Test{
		return this.list.find((test:Test) => test.id == id) || new Test();
	}
}

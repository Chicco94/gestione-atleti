import { IdBase } from "./idbase.model";

export class Group extends IdBase{

	constructor () {
		super();
		Object.setPrototypeOf(this, Group.prototype);
	}

	descr:string="";
}


import { IdBase } from "./idbase.model";

export class Competition extends IdBase{

	constructor () {
		super();
		Object.setPrototypeOf(this, Competition.prototype);
	}

	descr:string="";
	date:Date= new Date();
	place:string="";
}


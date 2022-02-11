import { IdBase } from "./idbase.model";

export class Training extends IdBase{

	constructor () {
		super();
		Object.setPrototypeOf(this, Training.prototype);
	}

	name:string;
	descr:string;
	idathletes:string[] = [];
}


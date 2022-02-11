import { Base } from "./base.model";

export class IdBase extends Base{
	id:string;

	constructor () {
		super();
		Object.setPrototypeOf(this, IdBase.prototype);
	}

	
	equal(object){
		return this.id == object.id;
	}
}
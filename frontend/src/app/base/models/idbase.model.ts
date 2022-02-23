import { Base } from "./base.model";

export class IdBase extends Base{
	id:number=0;
	createdAt:Date = new Date;
	updatedAt:Date = new Date;

	constructor () {
		super();
		Object.setPrototypeOf(this, IdBase.prototype);
	}

	
	override equal<Model extends IdBase>(object:Model){
		return this.id == object.id;
	}
}
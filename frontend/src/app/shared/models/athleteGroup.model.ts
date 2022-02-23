import { Base } from "./base.model";

export class AtletaGroup extends Base{
	idathlete:string="";
	idgroup:string="";

	constructor () {
		super();
		Object.setPrototypeOf(this, AtletaGroup.prototype);
	}

	override equal(object:AtletaGroup){
		try {
			return this.idathlete == object.idathlete && this.idgroup == object.idgroup;
		} catch {
			return false;
		}
	}
}


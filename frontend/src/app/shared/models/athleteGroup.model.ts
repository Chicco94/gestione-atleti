import { Base } from "./base.model";

export class AthleteGroup extends Base{
	idathlete:string="";
	idgroup:string="";

	constructor () {
		super();
		Object.setPrototypeOf(this, AthleteGroup.prototype);
	}

	override equal(object:AthleteGroup){
		try {
			return this.idathlete == object.idathlete && this.idgroup == object.idgroup;
		} catch {
			return false;
		}
	}
}

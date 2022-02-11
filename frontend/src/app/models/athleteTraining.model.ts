import { Base } from "./base.model";
import { CategoryEnum, SpecialityEnum } from "./enumerations";

export class AthleteCompetition extends Base{
	idathlete:string;
	idtraining:string;
	descr:string;

	constructor () {
		super();
		Object.setPrototypeOf(this, AthleteCompetition.prototype);
	}

	equal(object){
		try {
			return this.idathlete == object.idathlete && this.idtraining == object.idtraining;
		} catch {
			return false;
		}
	}
}


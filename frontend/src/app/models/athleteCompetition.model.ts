import { Base } from "./base.model";
import { CategoryEnum, SpecialityEnum } from "./enumerations";

export class AthleteCompetition extends Base{
	idathlete:string;
	idcompetition:string;
	speciality:SpecialityEnum;
	category:CategoryEnum;
	points:number;
	result:string;
	wind:number;

	constructor () {
		super();
		Object.setPrototypeOf(this, AthleteCompetition.prototype);
	}

	equal(object){
		try {
			return this.idathlete == object.idathlete && this.idcompetition == object.idcompetition && this.speciality == object.speciality;
		} catch {
			return false;
		}
	}
}


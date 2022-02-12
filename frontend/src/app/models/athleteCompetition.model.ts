import { Base } from "./base.model";
import { CategoryEnum, SpecialityEnum } from "./enumerations";

export class AthleteCompetition extends Base{
	idathlete:string="";
	idcompetition:string="";
	speciality:SpecialityEnum=SpecialityEnum.metri_100;
	category:CategoryEnum=CategoryEnum.AF;
	points:number=0;
	result:string="";
	wind:number=0;

	constructor () {
		super();
		Object.setPrototypeOf(this, AthleteCompetition.prototype);
	}

	override equal(object:AthleteCompetition){
		try {
			return this.idathlete == object.idathlete && this.idcompetition == object.idcompetition && this.speciality == object.speciality;
		} catch {
			return false;
		}
	}
}


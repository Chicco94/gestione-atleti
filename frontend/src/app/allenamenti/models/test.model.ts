
import { Athlete } from "src/app/shared/models/athlete.model";
import { SpecialityEnum } from "../../base/models/enumerations";
import { IdBase } from "../../base/models/idbase.model";

export class Test extends IdBase{

	constructor () {
		super();
		Object.setPrototypeOf(this, Test.prototype);
	}

    data:Date=new Date();
    atleta:Athlete = new Athlete;
    specialita:SpecialityEnum = SpecialityEnum.metri_100;
    risultato:number = 0;
}

import { Athlete } from "src/app/shared/models/athlete.model";
import { CategoryEnum, SexEnum, SideEnum, SpecialityEnum } from "../../base/models/enumerations";
import { IdBase } from "../../base/models/idbase.model";
import { Test } from "./test.model";

export class Allenamento extends IdBase{

	constructor () {
		super();
		Object.setPrototypeOf(this, Allenamento.prototype);
	}

    descr:string= "";
    data:Date=new Date();
    atleti:Athlete[] = [];
    specialita:SpecialityEnum[] = [];
    test:Test[] = [];

}
import { Athlete } from "src/app/shared/models/athlete.model";
import { IdBase } from "../../base/models/idbase.model";
import { Allenamento } from "./allenamento.model";
import { Test } from "./test.model";

export class Risultato extends IdBase{

	constructor () {
		super();
		Object.setPrototypeOf(this, Risultato.prototype);
	}

    atleta:Athlete = new Athlete();
    test:Test = new Test();
    allenamento:Allenamento = new Allenamento();
	sequenza:number = 0;
	risultato:number = 0;
}
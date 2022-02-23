import { Atleta } from "src/app/shared/models/atleta.model";
import { IdBase } from "../../base/models/idbase.model";
import { Allenamento } from "./allenamento.model";
import { Test } from "./test.model";

export class Risultato extends IdBase{

	constructor () {
		super();
		Object.setPrototypeOf(this, Risultato.prototype);
	}

    atleta:Atleta = new Atleta();
    test:Test = new Test();
    allenamento:Allenamento = new Allenamento();
	sequenza:number = 0;
	risultato:number = 0;
}
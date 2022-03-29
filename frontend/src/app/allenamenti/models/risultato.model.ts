import { Atleta } from "src/app/shared/models/atleta.model";
import { Test } from "src/app/shared/models/test.model";
import { IdBase } from "../../base/models/idbase.model";
import { Allenamento } from "./allenamento.model";

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
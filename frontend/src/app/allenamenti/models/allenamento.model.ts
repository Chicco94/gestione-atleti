
import { Atleta } from "src/app/shared/models/atleta.model";
import { Test } from "src/app/shared/models/test.model";
import { IdBase } from "../../base/models/idbase.model";
import { Risultato } from "./risultato.model";

export class Allenamento extends IdBase{

	constructor () {
		super();
		Object.setPrototypeOf(this, Allenamento.prototype);
	}

    descr:string= "";
    date:Date=new Date();
    completato:boolean=false;
    atleti:Atleta[] = [];
    test:Test[] = [];
    risultati:Risultato[] = [];

}
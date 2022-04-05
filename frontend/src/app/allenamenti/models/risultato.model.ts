import { Gara } from "src/app/gare/models/gara.model";
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
	idatleta:number = 0;
	test:Test = new Test();
	idtest:number = 0;
	allenamento:Allenamento = new Allenamento();
	idallenamento:number = 0;
	sequenza:number = 0;
	risultato:number = 0;

	get gara():Gara{
		let temp = new Gara().deserialize(this.allenamento);
		temp.isGara = false
		return temp;
	}
	set gara(value:Gara){
		this.allenamento = value;
	}
}
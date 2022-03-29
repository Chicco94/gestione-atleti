import { IdBase } from "../../base/models/idbase.model";

export class Allenamento extends IdBase{

	constructor () {
		super();
		Object.setPrototypeOf(this, Allenamento.prototype);
	}

		descr:string= "";
		date:Date=new Date();
		completato:boolean=false;
		risultati:any[] = [];

}
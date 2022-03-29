import { Allenamento } from "../../allenamenti/models/allenamento.model";

export class Gara extends Allenamento{

	constructor () {
		super();
		Object.setPrototypeOf(this, Gara.prototype);
	}

	isGara:boolean = true;
}
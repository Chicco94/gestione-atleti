import { IdBase } from "../../base/models/idbase.model";

export class Test extends IdBase{

	constructor () {
		super();
		Object.setPrototypeOf(this, Test.prototype);
	}

		descr:string = "";
		gruppo:string = "";
	tipo:string= "";
}
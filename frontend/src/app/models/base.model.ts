import { Deserializable } from "./deserializable.model";

export class Base implements Deserializable{
	constructor () {
		Object.setPrototypeOf(this, Base.prototype);
	}

	equal(o:Object){
		return false;
	}

	/**
	 * @author Enrico
	 * @param input object to deserialize
	 * @returns object requested
	 */
	deserialize(input: any):this {
		let keys = input ? Object.keys(input) : undefined;
		for (let i = 0; keys && i < keys.length; i++) {
			let key = keys[i];
			let val = input[key];
			/** 
			 * è il formato 8601 delle date, che noi otteniamo dalle select. es: 1995-0-29T20:00:00Z
			 * si assume che non esistano attributi non Date che contengono un valore che supera il test
			 * Enrico aiutami tu
			 * */
			if (typeof val === "string" && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(val)) {
				input[key] = new Date(val);
			}
		}

		return input ? Object.assign(this, input) : undefined;
	}
}
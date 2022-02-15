
import { CategoryEnum, SexEnum, SideEnum } from "../../base/models/enumerations";
import { IdBase } from "../../base/models/idbase.model";

export class Athlete extends IdBase{

	constructor () {
		super();
		Object.setPrototypeOf(this, Athlete.prototype);
	}

	tessera:string = "";
	name:string = "";
	surname:string = "";
	date_of_birth:Date = new Date();
	sex:SexEnum = SexEnum.male;
	
	// VELOCITA'
	piede_partenza_blocchi:SideEnum = SideEnum.dx;
	primo_piede:number = 0;
	secondo_piede:number = 0;

	// OSTACOLI
	passi_ostacoli_alti:number = 0;
	passi_ostacoli_bassi:number = 0;
	
	// LUNGO
	rincorsa_lungo:number = 0;
	passi_lungo:number = 0;
	piede_stacco_lungo:SideEnum = SideEnum.dx;
	
	// ALTO
	rincorsa_alto_1:number = 0;
	rincorsa_alto_2:number = 0;
	passi_alto:number = 0;
	piede_stacco_alto:SideEnum = SideEnum.dx;

	/**
	 * @author Enrico
	 * @description calculate the age of the athlete and returns it
	 * @returns the age of the athlete
	 */
	get age():number{
		if (!this.date_of_birth) return 0;
		const today = Date.now();
		const timediff = today - this.date_of_birth.getTime();
		return Math.floor( timediff / (1000 * 3600 * 24 * 365 ) )
	}

	/**
	 * @author Enrico
	 * @returns the full name of the athlete: surname name
	 */
	get fullName():string{
		return this.surname+" "+this.name;
	}

	/**
	 * @author Enrico
	 * @returns the category of the athlete based on sex and age
	 */
	get category():CategoryEnum{
		switch(true) { 
			case (this.age < 13): { return this.sex == SexEnum.male ? CategoryEnum.RM : CategoryEnum.RF; }
			case (this.age < 15): { return this.sex == SexEnum.male ? CategoryEnum.CM : CategoryEnum.CF; }
			case (this.age < 17): { return this.sex == SexEnum.male ? CategoryEnum.AM : CategoryEnum.AF; }
			case (this.age < 19): { return this.sex == SexEnum.male ? CategoryEnum.JM : CategoryEnum.JF; }
			case (this.age < 24): { return this.sex == SexEnum.male ? CategoryEnum.PM : CategoryEnum.PF; }
			case (this.age < 34): { return this.sex == SexEnum.male ? CategoryEnum.SM : CategoryEnum.SF; }
			case (this.age < 40): { return this.sex == SexEnum.male ? CategoryEnum.MM35 : CategoryEnum.MF35; }
			case (this.age < 45): { return this.sex == SexEnum.male ? CategoryEnum.MM40 : CategoryEnum.MF40; }
			case (this.age < 50): { return this.sex == SexEnum.male ? CategoryEnum.MM45 : CategoryEnum.MF45; }
			case (this.age < 55): { return this.sex == SexEnum.male ? CategoryEnum.MM50 : CategoryEnum.MF50; }
			case (this.age < 60): { return this.sex == SexEnum.male ? CategoryEnum.MM55 : CategoryEnum.MF55; }
			case (this.age < 65): { return this.sex == SexEnum.male ? CategoryEnum.MM60 : CategoryEnum.MF60; }
			case (this.age >= 65): { return this.sex == SexEnum.male ? CategoryEnum.MM65 : CategoryEnum.MF65; }
			default: { console.error("categoria non trovata",this);return CategoryEnum.AF;} 
		}
	}
	set category(category:CategoryEnum){
		console.error("Impossibile assegnare categoria");
	}

	/**
	 * @author Enrico
	 * @returns if the athlete is male or not
	 */
	get isMale():boolean{
		return this.sex == SexEnum.male;
	}
}
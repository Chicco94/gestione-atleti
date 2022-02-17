import { Injectable } from '@angular/core';
import { SexEnum } from 'src/app/base/models/enumerations';
import { AtletaPreviewComponent } from 'src/app/shared/components/lista-atleti/atleta-preview/atleta-preview.component';
import { Athlete } from 'src/app/shared/models/athlete.model';
import { Allenamento } from '../models/allenamento.model';
import { Risultato } from '../models/risultato.model';
import { Test } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class AllenamentoService {
  
  list:Allenamento[] = [];

  constructor() {
    Object.setPrototypeOf(this, AllenamentoService.prototype);
		let a1 = new Allenamento();
		a1.descr = "Allenamento di esempio 1";
    a1.data = new Date();
		let a2 = new Allenamento();
		a2.descr = "Allenamento di esempio 2";
    a2.data = new Date();
    let a3 = new Allenamento();
		a3.descr = "Allenamento di esempio 3";
    a3.data = new Date();
    a3.completato = true;
		for (let i=0;i<100;i++){
			this.list.push(a1);
			this.list.push(a2);
			this.list.push(a3);
		}
  }

  getAllenamento(id:number):Allenamento{
    let temp = new Allenamento();
    temp.id = id;
    let t1 = new Test();
    t1.descr = "30 metri";
    t1.gruppo = "rapidità";
    let t2 = new Test();
    t2.descr = "lungo da fermo";
    t2.gruppo = "esplosività";
    let t3 = new Test();
    t3.descr = "1000 metri";
    t3.gruppo = "resistenza";
    temp.test.push(t1);
    temp.test.push(t2);
    temp.test.push(t3);

    let a1 = new Athlete();
		a1.name = "Enrico";
		a1.surname = "Cominato";
		a1.sex = SexEnum.male;
		a1.date_of_birth = new Date("1994-02-07");
		let a2 = new Athlete();
		a2.name = "Eleonora";
		a2.surname = "Barcaro";
		a2.sex = SexEnum.female;
		a2.date_of_birth = new Date("2008-10-10");
    temp.atleti.push(a1);
    temp.atleti.push(a2);

    let r1 = new Risultato();
    r1.atleta = a1;
    r1.test = t1;
    r1.risultato = 4;

    temp.risultati.push(r1);

    return temp;
  }

  getAllenamenti():Allenamento[]{
    return this.list;
  }
}

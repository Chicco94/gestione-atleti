import { Injectable } from '@angular/core';
import { Allenamento } from '../models/allenamento.model';

@Injectable({
  providedIn: 'root'
})
export class AllenamentoService {
  
  list:Allenamento[] = [];

  constructor() {
    Object.setPrototypeOf(this, AllenamentoService.prototype);
		let a1 = new Allenamento();
		a1.descr = "Esempio 1";
    a1.data = new Date();
		let a2 = new Allenamento();
		a2.descr = "Esempio 2";
    a2.data = new Date();
		for (let i=0;i<100;i++){
			this.list.push(a1);
			this.list.push(a2);
		}
  }

  getAllenamento(id:number):Allenamento{
    let temp = new Allenamento();
    temp.id = id;
    return temp;
  }

  getAllenamenti():Allenamento[]{
    return this.list;
  }
}

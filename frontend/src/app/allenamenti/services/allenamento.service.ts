import { Injectable } from '@angular/core';
import { Allenamento } from '../models/allenamento.model';

@Injectable({
  providedIn: 'root'
})
export class AllenamentoService {

  constructor() { }

  getAllenamento(id:number):Allenamento{
    let temp = new Allenamento();
    temp.id = id;
    return temp;
  }
}

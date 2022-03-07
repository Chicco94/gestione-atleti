import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Risultato } from '../models/risultato.model';

@Injectable({
  providedIn: 'root'
})
export class RisultatoService {

  constructor(private socket: Socket) {
    Object.setPrototypeOf(this, RisultatoService.prototype);
  }
  
  fetchRisultati(){this.socket.emit('fetchRisultati');}
	addRisultato(risultato:Risultato){this.socket.emit('addRisultato',risultato);}
	updateRisultato(risultato:Risultato){this.socket.emit('updateRisultato',risultato);}
	deleteRisultato(id:number){this.socket.emit('deleteRisultato',id);}
	getRisultato(id:number){this.socket.emit('getRisultato',id);}
	getRisultatoByAllenamento(idallenamento:number){this.socket.emit('getRisultato',idallenamento);}

	OnFetchRisultati() {return this.socket.fromEvent('fetchRisultati');}
	OnGetRisultato() {return this.socket.fromEvent('getRisultato');}
	OnGetRisultatoByAllenamento() {return this.socket.fromEvent('getRisultatoByAllenamento');}
}

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
	addRisultato(atleta:Risultato){this.socket.emit('addRisultato',atleta);}
	updateRisultato(atleta:Risultato){this.socket.emit('updateRisultato',atleta);}
	deleteRisultato(id:number){this.socket.emit('deleteRisultato',id);}
	getRisultato(id:number){this.socket.emit('getRisultato',id);}

	OnFetchRisultati() {return this.socket.fromEvent('fetchRisultati');}
	OnGetRisultato() {return this.socket.fromEvent('getRisultato');}
}

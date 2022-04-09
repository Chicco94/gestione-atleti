import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { AllenamentoService } from 'src/app/allenamenti/services/allenamento.service';
import { Gara } from 'src/app/gare/models/gara.model';

@Injectable({
	providedIn: 'root'
})
export class GaraService {

	constructor(private allenamentoService:AllenamentoService,private socket:Socket) {
	}

	fetchGare(){this.socket.emit('fetchGare');}
	addGara(gara:Gara){this.allenamentoService.addAllenamento(gara)}
	buildGara(idgara:number){this.allenamentoService.buildAllenamento(idgara)}
	updateGara(gara:Gara){this.allenamentoService.updateAllenamento(gara)}
	deleteGara(id:number){this.allenamentoService.deleteAllenamento(id)}
	getGara(id:number){this.allenamentoService.getAllenamento(id)}

	OnFetchGare() {return this.allenamentoService.OnFetchAllenamenti();}
	OnGetGara() {return this.allenamentoService.OnGetAllenamento();}
}

export class MockGaraService {}
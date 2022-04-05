import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Risultato } from 'src/app/allenamenti/models/risultato.model';
import { RisultatoService } from 'src/app/allenamenti/services/risultato.service';
import { AnagraficaRisultatoComponent } from 'src/app/shared/components/anagrafica-risultato/anagrafica-risultato.component';
import { Atleta } from 'src/app/shared/models/atleta.model';
import { Test } from 'src/app/shared/models/test.model';
import { Gara } from '../../models/gara.model';
import { GaraService } from '../../services/gara.service';

@Component({
	selector: 'app-costruisci',
	templateUrl: './costruisci.component.html',
	styleUrls: ['./costruisci.component.scss']
})
export class CostruisciComponent implements OnInit {
	risultati:Risultato[] = [];
	gara:Gara = new Gara();

	__OnGetGara__:Subscription = new Subscription();
	__OnGetRisultatoByAllenamento__:Subscription = new Subscription();


	constructor(
		private risultatoService:RisultatoService,
		private garaService:GaraService,
		private route:ActivatedRoute,
		public dialog: MatDialog) {
		this.route.params.subscribe(params => {
			//this.garaService.getGara(params['idgara']);
			this.risultatoService.getRisultatoByAllenamento(params['idgara'])
			this.gara.id = params['idgara'];
		});
	}

	ngOnInit(): void {
		this.__OnGetGara__ = this.garaService.OnGetGara().subscribe((data:any) => {
			if (data != null && data['id'] > 0) this.gara = new Gara().deserialize(data);
		});
		this.__OnGetRisultatoByAllenamento__ = this.risultatoService.OnGetRisultatoByAllenamento().subscribe((data:any) => {
			data.forEach( (element:any) => {
				let risultato:Risultato = new Risultato().deserialize(element)
				risultato.test = new Test().deserialize(element.test)
				risultato.atleta = new Atleta().deserialize(element.atleta)
				risultato.gara = new Gara().deserialize(element.allenament0)
				this.risultati = [...this.risultati , risultato]
			});
			console.log(this.risultati);
		});
	}

	ngOnDestroy(){
		this.__OnGetGara__.unsubscribe()
		this.__OnGetRisultatoByAllenamento__.unsubscribe()
	}

	addRisultato(): void {
		let temp = new Risultato();
		temp.idallenamento = this.gara.id;
	}
	confirm(){
		this.risultatoService.addRisultato(this.risultati[0]);
	}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Risultato } from 'src/app/allenamenti/models/risultato.model';
import { RisultatoService } from 'src/app/allenamenti/services/risultato.service';
import { Atleta } from '../../models/atleta.model';
import { Test } from '../../models/test.model';
import { AtletaService } from '../../services/atleta.service';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-anagrafica-risultato',
  templateUrl: './anagrafica-risultato.component.html',
  styleUrls: ['./anagrafica-risultato.component.scss']
})
export class AnagraficaRisultatoComponent implements OnInit {
	risultato:Risultato = new Risultato();
	idgara:number = 0;
	atleti:Atleta[] = [];
	selected_atleti:number[] = [];
	tests:Test[] = [];
	selected_tests:Test[] = [];

	__OnGetRisultato__:Subscription = new Subscription();
	__OnGetAtleti__:Subscription = new Subscription();
	__OnGetTest__:Subscription = new Subscription();

	constructor(
		private route:ActivatedRoute,
		private atletaService:AtletaService,
		private testService:TestService,
		private risultatoService:RisultatoService
	) {
		this.route.params.subscribe(params => {
			this.risultatoService.getRisultato(params['idrisultato']);
			this.idgara = params['idgara'];
		});

		this.atletaService.fetchAtleti();
		this.testService.fetchTests();
	}

	ngOnInit(): void {
		this.__OnGetRisultato__ = this.risultatoService.OnGetRisultato().subscribe((data:any) =>{
			if (data != null && data['id'] > 0) this.risultato = new Risultato().deserialize(data);
		})
		this.__OnGetAtleti__ = this.atletaService.OnFetchAtleti().subscribe((data:any) =>{
			this.atleti = data.map((item:any) => new Atleta().deserialize(item))
		})
		this.__OnGetTest__ = this.testService.OnFetchTests().subscribe((data:any) =>{
			this.tests = data.map((item:any) => new Test().deserialize(item))
		})
	}

	ngOnDestroy():void{
		this.__OnGetRisultato__.unsubscribe()
		this.__OnGetAtleti__.unsubscribe()
		this.__OnGetTest__.unsubscribe()
	}

	confirm():void{
		this.risultato.idatleta = this.selected_atleti[0];
		this.risultato.idtest = this.selected_tests[0].id;
		this.risultato.idallenamento = this.idgara;
		console.log(this.risultato);
		if (this.risultato.id){
			this.risultatoService.updateRisultato(this.risultato);
		} else {
			this.risultatoService.addRisultato(this.risultato);
		}
	}
}

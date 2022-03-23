import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TestTypeEnum } from 'src/app/base/models/enumerations';
import { Atleta } from 'src/app/shared/models/atleta.model';
import { Test } from 'src/app/shared/models/test.model';
import { Allenamento } from '../../models/allenamento.model';
import { AllenamentoService } from '../../services/allenamento.service';
import { RisultatoService } from '../../services/risultato.service';

@Component({
	selector: 'app-allenamento-attivo',
	templateUrl: './allenamento-attivo.component.html',
	styleUrls: ['./allenamento-attivo.component.scss']
})
export class AllenamentoAttivoComponent implements OnInit,OnDestroy {
	allenamento:Allenamento = new Allenamento();
	dataSource:any[] = [];
	currentTest:Test = new Test();
	currentTestIndex:number = 1;

	__OnGetAllenamento__:Subscription = new Subscription();

	constructor(
		private route:ActivatedRoute,
		private risultatoService:RisultatoService,
		private allenamentoService:AllenamentoService,
	) {
		this.route.params.subscribe(params => {
			this.allenamentoService.getAllenamento(params['id']);
		});
	}
	value:number=0;
	ngOnInit(): void {
		this.__OnGetAllenamento__ = this.allenamentoService.OnGetAllenamento().subscribe((data:any) => {
			if (data == null || data['id'] <= 0) return
			this.allenamento = new Allenamento().deserialize(data);
			this.dataSource = this.prepareDataSource(this.allenamento);
			this.currentTest = this.dataSource[0]['result_'+this.currentTestIndex].Test;
		});
	}

	ngOnDestroy():void{
		this.__OnGetAllenamento__.unsubscribe();
	}

	/**
	 * @author Enrico
	 * @description trasforma un allenamento in un datasource per una tabella
	 * @param allenamento allenamento da cui recuperare i risultati
	 */
	prepareDataSource(allenamento:Allenamento){
		allenamento.risultati.forEach(element => {
			element.atleta = new Atleta().deserialize(element.atleta)
		});
		return allenamento.risultati;
	}

	nextTest(){
		try{
			this.currentTest = this.dataSource[0]['result_'+(this.currentTestIndex+1)].Test;
			this.currentTestIndex += 1;
		} catch (Error) { 
			alert("hai finito i test!");
		} 
	}

	prevTest(){
		try{
			this.currentTest = this.dataSource[0]['result_'+(this.currentTestIndex-1)].Test;
			this.currentTestIndex -= 1;
		} catch (Error) {  
			alert("questo è il primo test!"); 
		} 
	}

	getTestFromRisultato(risultato:any){
		return risultato['result_'+(this.currentTestIndex)].Test
	}

	/**
	 * @author Enrico
	 * @description salva i risultati a database
	 */
	public save(){
		this.allenamento.risultati.forEach( risultati_atleta => {
			let sequenza=1;
			while (risultati_atleta['result_'+sequenza]){
				this.risultatoService.updateRisultato(risultati_atleta['result_'+sequenza])
				sequenza += 1;
			}
		})
	}


	/**
	 * @author Enrico
	 * @description salva i risultati a database e completa l'allenamento
	 */
	public confirm(){
		this.save();
		this.allenamento.completato = true;
		this.allenamentoService.updateAllenamento(this.allenamento);
	}
}
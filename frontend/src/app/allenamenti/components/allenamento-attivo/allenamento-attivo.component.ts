import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TestTypeEnum } from 'src/app/base/models/enumerations';
import { Atleta } from 'src/app/shared/models/atleta.model';
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
	columns:TableColumn[] = [];
	dataSource:any[] = [];
	displayedColumns:string[] = [];

	
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

	ngOnInit(): void {
		this.__OnGetAllenamento__ = this.allenamentoService.OnGetAllenamento().subscribe((data:any) => {
			if (data == null || data['id'] <= 0) return
			this.allenamento = new Allenamento().deserialize(data);
			this.dataSource = this.prepareTableDataSource(this.allenamento);
			this.columns = this.prepareTableColumns(this.dataSource)
			this.displayedColumns = this.columns.map(c => c.columnDef);
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
	prepareTableDataSource(allenamento:Allenamento){
		allenamento.risultati.forEach(element => {
			element.atleta = new Atleta().deserialize(element.atleta)
		});
		return allenamento.risultati;
	}

	prepareTableColumns(datasource:any):TableColumn[]{
		let row = datasource[0];
		let structure = [{
			columnDef: 'atleta',
			header: "Atleta",
			sticky: true,
			key: 'atleta',
			type: ColumnTypeEnum.plain,
			cell: (d_row:any) => `${d_row.atleta.fullName}`,
		}];
		let sequenza=1;
		while (row['result_'+sequenza]){
			structure.push({
				columnDef: 'test_'+sequenza,
				header: row['result_'+sequenza].Test.descr,
				sticky: false,
				key: 'result_'+sequenza,
				type: row['result_'+sequenza].Test.tipo == TestTypeEnum.Crono ? ColumnTypeEnum.time : ColumnTypeEnum.number,
				cell: (d_row) => `${d_row['result_'+sequenza].risultato}`,
			})
			sequenza += 1;
		}
		return structure;
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

export interface TableColumn {
	columnDef: string;
	header: string;
	sticky?: boolean;
	key: string;
	type: ColumnTypeEnum
	cell: (model:any)=>string;
}

export enum ColumnTypeEnum{
	plain="plain",
	number="number",
	text="text",
	time="time"
} 
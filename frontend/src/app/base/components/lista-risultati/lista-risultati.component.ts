import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Risultato } from 'src/app/allenamenti/models/risultato.model';

@Component({
	selector: 'app-lista-risultati',
	templateUrl: './lista-risultati.component.html',
	styleUrls: ['./lista-risultati.component.scss']
})
export class ListaRisultatiComponent implements OnInit {
	@Input() showAtleta:boolean=true;
	@Input() showTest:boolean=true;
	@Input() showResult:boolean=true;
	
	@Input() addable:boolean=false;
	@Input() removable:boolean=false;
	@Input() searchable:boolean=false;

	@Input() disabled:boolean=false;
	
	@Input() subheader:boolean=true;
	
	@Input() maxHeight:number=100;

	@Input() sourceRisultatiList:Risultato[] = [];
	@Input() targetRisultatiList:Risultato[] = [];
	
	@Output() goToRisultato:EventEmitter<number> = new EventEmitter<number>();
	@Output() removeRisultato:EventEmitter<number> = new EventEmitter<number>();
	@Output() targetRisultatiListChange:EventEmitter<Risultato[]> = new EventEmitter<Risultato[]>();

	searchString:string="";

	constructor() {}

	ngOnInit(): void {
	}

	getChanges(targetRisultatoList:Risultato[]){
		this.targetRisultatiListChange.emit(targetRisultatoList);
	}
	remove(idrisultato:number){
		this.removeRisultato.emit(idrisultato);
	}
	go(idrisultato:number){
		this.goToRisultato.emit(idrisultato);
	}
}

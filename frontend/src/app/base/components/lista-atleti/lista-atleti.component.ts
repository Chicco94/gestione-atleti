import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchPipe } from 'src/app/base/pipes/search.pipe';
import { Atleta } from '../../../shared/models/atleta.model';

@Component({
	selector: 'app-lista-atleti',
	templateUrl: './lista-atleti.component.html',
	styleUrls: ['./lista-atleti.component.scss']
})
export class ListaAtletiComponent implements OnInit {

	@Input() addable:boolean=false;
	@Input() selectable:boolean=false;
	@Input() editable:boolean=false;
	@Input() searchable:boolean=false;
	
	@Input() sourceAtletaList:Atleta[] = [];
	@Input() targetAtletaList:number[] = [];

	@Output() goToAtleta:EventEmitter<number> = new EventEmitter<number>();
	@Output() targetAtletaListChange:EventEmitter<number[]> = new EventEmitter<number[]>();

	searchString:string="";
	searchPipe:SearchPipe = new SearchPipe();
	allSelected=false;

	constructor() {}

	ngOnInit(): void {
	}

	public onSelectedOptionsChange() {
		setTimeout(() => {
			this.targetAtletaListChange.emit(
				this.sourceAtletaList
				.filter(item => { return item.selected; })
				.map(item =>item.id)
			);
		})
	}

	toggleAllSelection() {
		if (!this.allSelected) {
			this.searchPipe.transform(this.sourceAtletaList,'id,nome,cognome',this.searchString)
				.forEach((item: Atleta) => item.selected = true)
			this.allSelected = true;
		} else {
			this.searchPipe.transform(this.sourceAtletaList,'id,nome,cognome',this.searchString)
				.forEach((item: Atleta) => item.selected = false)
			this.allSelected = false
		}
	}
	optionClick(atleta:Atleta) {
		atleta.selected = !atleta.selected;
		// se c'e' che un atleta non selezionato
		this.allSelected = !(this.sourceAtletaList.filter((item: Atleta) => !item.selected).length > 0);
	}
	go(idatleta:number){
		this.goToAtleta.emit(idatleta);
	}
}

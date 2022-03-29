import { Component, OnInit } from '@angular/core';
import { Allenamento } from 'src/app/allenamenti/models/allenamento.model';
import { AllenamentoService } from 'src/app/allenamenti/services/allenamento.service';

@Component({
	selector: 'app-lista-gare',
	templateUrl: './lista-gare.component.html',
	styleUrls: ['./lista-gare.component.scss']
})
export class ListaGareComponent implements OnInit {
	filteredAllenamenti:Allenamento[] = [];
	allenamenti:Allenamento[] = [];
	searchString:string = "";
	showCompletati:boolean = false;

	constructor(
		private allenamentoService:AllenamentoService
	) {}

	ngOnInit(): void {
		this.allenamentoService.fetchAllenamenti();
		this.allenamentoService.OnFetchAllenamenti().subscribe((data:any) => {
			this.allenamenti = data.map((single_data:any) => new Allenamento().deserialize(single_data));
			this.filteredAllenamenti = this.allenamenti.filter(item=>this.filterAllenamento(item,this.showCompletati));
		});
	}

	changeShowCompletati(){
		this.showCompletati = !this.showCompletati;
		this.filteredAllenamenti = this.allenamenti.filter(item=>this.filterAllenamento(item,this.showCompletati));
	}

	filterAllenamento(allenamento:Allenamento,showCompletati:boolean):boolean{
		if (allenamento.completato && !showCompletati) return false
		return true
	}
}

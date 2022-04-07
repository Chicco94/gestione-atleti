import { Component, OnInit } from '@angular/core';
import { Gara } from '../../models/gara.model';
import { GaraService } from '../../services/gara.service';

@Component({
	selector: 'app-lista-gare',
	templateUrl: './lista-gare.component.html',
	styleUrls: ['./lista-gare.component.scss']
})
export class ListaGareComponent implements OnInit {
	filteredGare:Gara[] = [];
	gare:Gara[] = [];
	searchString:string = "";
	showCompletati:boolean = false;

	constructor(
		private garaService:GaraService
	) {}

	ngOnInit(): void {
		this.garaService.fetchGare();
		this.garaService.OnFetchGare().subscribe((data:any) => {
			this.gare = data.map((single_data:any) => new Gara().deserialize(single_data));
			this.filteredGare = this.gare.filter(item=>this.filterGara(item,this.showCompletati));
		});
	}

	changeShowCompletati(){
		this.showCompletati = !this.showCompletati;
		this.filteredGare = this.gare.filter(item=>this.filterGara(item,this.showCompletati));
	}

	filterGara(gara:Gara,showCompletati:boolean):boolean{
		if (gara.completato && !showCompletati) return false
		return true
	}
}

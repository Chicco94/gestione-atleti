import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Atleta } from 'src/app/shared/models/atleta.model';
import { AtletaService } from 'src/app/shared/services/atleta.service';

@Component({
	selector: 'app-gestione-atleti',
	templateUrl: './gestione-atleti.component.html',
	styleUrls: ['./gestione-atleti.component.scss']
})
export class GestioneAtletiComponent implements OnInit {
	atleti:Atleta[] = [];
	
	__OnFetchAtleti__:Subscription = new Subscription();
	constructor(
		private atletaService:AtletaService) { 
			this.atletaService.fetchAtleti();
		}

	ngOnInit(): void {
		this.__OnFetchAtleti__ = this.atletaService.OnFetchAtleti().subscribe((data:any) => {
			this.atleti = data.map((single_data:any) => new Atleta().deserialize(single_data));
		});
	}

	ngOnDestroy():void{
		this.__OnFetchAtleti__.unsubscribe();
	}

	confirm(){
	}

	goToAtleta(idatleta:number){
		
	}
}

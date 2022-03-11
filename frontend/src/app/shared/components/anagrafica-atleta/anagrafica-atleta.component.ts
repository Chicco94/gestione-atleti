import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SexEnum } from 'src/app/base/models/enumerations';
import { Atleta } from '../../models/atleta.model';
import { AtletaService } from '../../services/atleta.service';

@Component({
	selector: 'app-anagrafica-atleta',
	templateUrl: './anagrafica-atleta.component.html',
	styleUrls: ['./anagrafica-atleta.component.scss']
})
export class AnagraficaAtletaComponent implements OnInit {
	atleta:Atleta = new Atleta();
	sexEnum = SexEnum;

	constructor(
		private route:ActivatedRoute,
		private atletaService:AtletaService
	) { 
		this.route.params.subscribe(params => {this.atletaService.getAtleta(params['id']);});
	}

	ngOnInit(): void {
    	this.atletaService.OnGetAtleta().subscribe((data:any) => {
			if (data != null && data['id'] > 0) this.atleta = new Atleta().deserialize(data);
    	});
	}

	save(){
		if (this.atleta.id > 0){
			this.atletaService.updateAtleta(this.atleta);
		} else {
			this.atletaService.addAtleta(this.atleta);
		}
	}

	delete(){
		this.atletaService.deleteAtleta(this.atleta.id);
	}
}

import { Component, Input, OnInit } from '@angular/core';
import { Allenamento } from 'src/app/allenamenti/models/allenamento.model';

@Component({
	selector: 'app-allenamento-preview',
	templateUrl: './allenamento-preview.component.html',
	styleUrls: ['./allenamento-preview.component.scss']
})
export class AllenamentoPreviewComponent implements OnInit {
	@Input() allenamento:Allenamento = new Allenamento();
	constructor() { }

	ngOnInit(): void {
	}
	select(){
		
	}
}

import { Component, Input, OnInit } from '@angular/core';
import { Risultato } from 'src/app/allenamenti/models/risultato.model';

@Component({
	selector: 'app-risultato-preview',
	templateUrl: './risultato-preview.component.html',
	styleUrls: ['./risultato-preview.component.scss']
})
export class RisultatoPreviewComponent implements OnInit {
	@Input() showAtleta:boolean=true;
	@Input() showTest:boolean=true;
	@Input() showResult:boolean=true;
	@Input() disabled:boolean=false;
	@Input() removable:boolean=false;
	@Input() editable:boolean=false;

	@Input() risultato:Risultato=new Risultato()
	constructor() { }

	ngOnInit():	void {
		console.log(this.risultato);
	}
}

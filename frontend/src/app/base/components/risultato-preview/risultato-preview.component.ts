import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

	@Output() removeRisultato:EventEmitter<number> = new EventEmitter<number>();
	constructor() { }

	ngOnInit():	void {
	}

	remove(): void{
		this.removeRisultato.emit(this.risultato.id);
	}
}

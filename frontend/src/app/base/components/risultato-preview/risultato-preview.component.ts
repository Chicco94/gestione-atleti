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

	@Input() subheader:boolean=true;

	@Input() risultato:Risultato=new Risultato()

	@Output() removeRisultato:EventEmitter<number> = new EventEmitter<number>();
	constructor() { }

	ngOnInit():	void {
	}

	remove(): void{
		this.removeRisultato.emit(this.risultato.id);
	}

	getLenght(showField1:boolean,showField2:boolean,removable:boolean):number{
		if (showField1 && showField2 && removable) return 25;
		if (showField1 && showField2) return 30;
		if (showField1 && removable) return 40;
		if (showField2 && removable) return 40;
		if (showField1) return 45;
		if (showField2) return 45;
		if (removable) return 80;
		return 100;
	}
}

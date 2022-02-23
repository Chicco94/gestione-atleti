import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SexEnum } from 'src/app/base/models/enumerations';
import { Atleta } from 'src/app/shared/models/atleta.model';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.scss']
})
export class AtletaComponent {
	athlete:Atleta = new Atleta();
	disabled:boolean = false;
	
	sexEnum = SexEnum;
	
	constructor(
		private route:ActivatedRoute) {}

	onAtletaChange(){
	}
}

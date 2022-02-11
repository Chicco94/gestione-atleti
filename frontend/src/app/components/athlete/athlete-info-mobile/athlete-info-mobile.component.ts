import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Athlete } from 'src/app/models/athlete.model';

@Component({
  selector: 'app-athlete-info-mobile',
  templateUrl: './athlete-info-mobile.component.html',
  styleUrls: ['./athlete-info-mobile.component.css']
})
export class AthleteInfoMobileComponent implements OnInit {
	@Input() athlete:Athlete;
	@Output() athleteChange = new EventEmitter<Object>();
	constructor() { }

	ngOnInit() {
	}

	onAthleteChange(){
		this.athleteChange.emit(this.athlete);
	}
}

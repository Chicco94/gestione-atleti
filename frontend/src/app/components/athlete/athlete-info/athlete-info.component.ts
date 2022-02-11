import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Athlete } from 'src/app/models/athlete.model';

@Component({
	selector: 'app-athlete-info',
	templateUrl: './athlete-info.component.html',
	styleUrls: ['./athlete-info.component.css']
})
export class AthleteInfoComponent implements OnInit {
	@Input() athlete:Athlete;
	@Output() athleteChange = new EventEmitter<Object>();
	constructor() { }

	ngOnInit() {
	}

	onAthleteChange(){
		this.athleteChange.emit(this.athlete);
	}
}

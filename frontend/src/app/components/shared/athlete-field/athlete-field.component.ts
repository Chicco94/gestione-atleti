import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Athlete } from 'src/app/models/athlete.model';
import { AthleteService } from 'src/app/services/athlete.service';

@Component({
  selector: 'app-athlete-field',
  templateUrl: './athlete-field.component.html',
  styleUrls: ['./athlete-field.component.css']
})
export class AthleteFieldComponent implements OnInit {
	@Input() idathlete:string;
	@Input() placeholder?:string = '';
	@Input() disabled?:boolean = false;

	athletes:Athlete[];

	@Output() idathleteChange = new EventEmitter<string>();
	constructor(private athleteService:AthleteService) {
		this.athletes = this.athleteService.list;
	}

	ngOnInit() {
	}

	onModelChange(){
		this.idathleteChange.emit(this.idathlete);
	}

}

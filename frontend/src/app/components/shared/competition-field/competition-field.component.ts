import { EventEmitter, Output, Component, Input, OnInit } from '@angular/core';
import { Competition } from 'src/app/models/competition.model';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
	selector: 'app-competition-field',
	templateUrl: './competition-field.component.html',
	styleUrls: ['./competition-field.component.css']
})
export class CompetitionFieldComponent implements OnInit {
	@Input() idcompetition:number;
	@Input() placeholder?:string = '';
	@Input() disabled?:boolean = false;

	competitions:Competition[];

	@Output() idcompetitionChange = new EventEmitter<number>();
	constructor(private competitionService:CompetitionService) {
		this.competitions = this.competitionService.list;
	}

	ngOnInit() {
	}

	onModelChange(){
		this.idcompetitionChange.emit(this.idcompetition);
	}

}

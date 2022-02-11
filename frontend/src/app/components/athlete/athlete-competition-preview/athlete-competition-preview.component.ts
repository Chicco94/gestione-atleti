import { Component, Input, OnInit } from '@angular/core';
import { AthleteCompetition } from 'src/app/models/athleteCompetition.model';
import { Competition } from 'src/app/models/competition.model';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
	selector: 'app-athlete-competition-preview',
	templateUrl: './athlete-competition-preview.component.html',
	styleUrls: ['./athlete-competition-preview.component.css']
})
export class AthleteCompetitionPreviewComponent implements OnInit {
	@Input() athleteCompetition:AthleteCompetition;
	competition:Competition;

	constructor(private competitionService:CompetitionService) {
	}

	ngOnInit() {
		this.competition = this.competitionService.getCompetition(this.athleteCompetition.idcompetition)
	}


}

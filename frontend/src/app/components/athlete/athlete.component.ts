import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Athlete } from 'src/app/models/athlete.model';
import { AthleteService } from 'src/app/services/athlete.service';
import { AthleteCompetition } from 'src/app/models/athleteCompetition.model';
import { AthleteCompetitionService } from 'src/app/services/athlete-competition.service';
import { DialogAthleteCompetitionComponent } from 'src/app/dialog/dialog-athlete-competition/dialog-athlete-competition.component';
import { BaseComponent } from '../shared/base/base.component';
import { AthleteGroup } from 'src/app/models/athleteGroup.model';
import { AthleteGroupService } from 'src/app/services/athlete-group.service';
import { DialogAthleteGroupComponent } from 'src/app/dialog/dialog-athlete-group/dialog-athlete-group.component';

@Component({
	selector: 'app-athlete',
	templateUrl: './athlete.component.html',
	styleUrls: ['./athlete.component.css']
})
export class AthleteComponent extends BaseComponent {
	athlete:Athlete;
	athleteCompetitions:AthleteCompetition[];
	athleteGroups:AthleteGroup[];
	
	constructor(
		private route:ActivatedRoute,
		public athleteService:AthleteService,
		private athleteCompetitionService:AthleteCompetitionService,
		private athleteGroupService:AthleteGroupService,
		public dialog: MatDialog) {
			super();
			this.route.params.subscribe(params => {
				this.athlete = this.athleteService.getAthlete(params['id']);
			});
			this.athleteCompetitions = this.athleteCompetitionService.getAthleteCompetitionByAthlete(this.athlete.id);
			this.athleteGroups = this.athleteGroupService.getAthleteGroupByAthlete(this.athlete.id);
	}

	public newAthleteCompetition(){
		let athleteCompetition = new AthleteCompetition().deserialize({idathlete: this.athlete.id,category:this.athlete.category})
		const dialogRef = this.dialog.open(DialogAthleteCompetitionComponent, {
			maxHeight: "80vh",
			minWidth: "95vw",
			panelClass: 'my-dialog-container',
			data: {athleteCompetition:athleteCompetition}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result!=undefined){
				this.athleteCompetitionService.saveAndPush(result.athleteCompetition);
			}
		});
	}

	public newAthleteGroup(){
		let athleteGroup = new AthleteGroup().deserialize({idathlete: this.athlete.id,group:undefined})
		const dialogRef = this.dialog.open(DialogAthleteGroupComponent, {
			maxHeight: "80vh",
			minWidth: "95vw",
			panelClass: 'my-dialog-container',
			data: {athleteGroup:athleteGroup}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result!=undefined){
				this.athleteGroupService.saveAndPush(result.athleteGroup);
			}
		});
	}
}

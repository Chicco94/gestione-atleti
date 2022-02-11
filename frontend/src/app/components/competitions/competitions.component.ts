import { Component, OnInit } from '@angular/core';
import { DialogCompetitionComponent } from 'src/app/dialog/dialog-competition/dialog-competition.component';
import { MatDialog } from '@angular/material';
import { Competition } from 'src/app/models/competition.model';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
	selector: 'app-competitions',
	templateUrl: './competitions.component.html',
	styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
	filteredCompetitions:Competition[];
	constructor(private competitionService:CompetitionService,public dialog: MatDialog) {
		this.filteredCompetitions = this.competitionService.list;
	}

	ngOnInit() {
	}

	public newCompetition(){
		const dialogRef = this.dialog.open(DialogCompetitionComponent, {
			maxHeight: "80vh",
			minWidth: "95vw",
			panelClass: 'my-dialog-container',
			data: {competition: new Competition()}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result!=undefined){
				this.competitionService.saveAndPush(result.competition);
			}
		});
	}
}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AthleteCompetition } from 'src/app/models/athleteCompetition.model';

@Component({
	selector: 'app-dialog-athlete-competition',
	templateUrl: './dialog-athlete-competition.component.html',
	styleUrls: ['./dialog-athlete-competition.component.css']
})
export class DialogAthleteCompetitionComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<DialogAthleteCompetitionComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

	ngOnInit() {
	}
	
	close(): void {
		this.dialogRef.close();
	}
}

export interface DialogData {
	athleteCompetition: AthleteCompetition;
}
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Competition } from 'src/app/models/competition.model';

@Component({
	selector: 'app-dialog-competition',
	templateUrl: './dialog-competition.component.html',
	styleUrls: ['./dialog-competition.component.css']
})
export class DialogCompetitionComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<DialogCompetitionComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

	ngOnInit() {
	}
	
	close(): void {
		this.dialogRef.close();
	}
}

export interface DialogData {
	competition: Competition
}
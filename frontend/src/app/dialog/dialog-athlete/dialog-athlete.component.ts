import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseComponent } from 'src/app/components/shared/base/base.component';
import { Athlete } from 'src/app/models/athlete.model';

@Component({
	selector: 'app-dialog-athlete',
	templateUrl: './dialog-athlete.component.html',
	styleUrls: ['./dialog-athlete.component.css']
})
export class DialogAthleteComponent extends BaseComponent {

	constructor(
		public dialogRef: MatDialogRef<DialogAthleteComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {
			super();
		}
	
	close(): void {
		this.dialogRef.close();
	}
}

export interface DialogData {
	athlete: Athlete;
}
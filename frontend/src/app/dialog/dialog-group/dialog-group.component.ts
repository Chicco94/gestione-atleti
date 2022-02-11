import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Group } from 'src/app/models/group.model';

@Component({
  selector: 'app-dialog-group',
  templateUrl: './dialog-group.component.html',
  styleUrls: ['./dialog-group.component.css']
})
export class DialogGroupComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<DialogGroupComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

	ngOnInit() {
	}
	
	close(): void {
		this.dialogRef.close();
	}

}

export interface DialogData {
	group: Group
}
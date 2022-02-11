import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AthleteGroup } from 'src/app/models/athleteGroup.model';
import { Group } from 'src/app/models/group.model';
import { AthleteGroupService } from 'src/app/services/athlete-group.service';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-dialog-athlete-group',
  templateUrl: './dialog-athlete-group.component.html',
  styleUrls: ['./dialog-athlete-group.component.css']
})
export class DialogAthleteGroupComponent implements OnInit {
  allGroups:Group[];

	constructor(
		public dialogRef: MatDialogRef<DialogAthleteGroupComponent>,
    private groupService:GroupService,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

	ngOnInit() {
    this.allGroups = this.groupService.list;
	}
	
	close(): void {
		this.dialogRef.close();
	}
}

export interface DialogData {
	athleteGroup: AthleteGroup;
}
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogGroupComponent } from 'src/app/dialog/dialog-group/dialog-group.component';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
	filteredGroups:Group[];
	constructor(private groupService:GroupService,public dialog: MatDialog) {
		this.filteredGroups = this.groupService.list;
	}

	ngOnInit() {
	}

	public newGroup(){
		const dialogRef = this.dialog.open(DialogGroupComponent, {
			maxHeight: "80vh",
			minWidth: "95vw",
			panelClass: 'my-dialog-container',
			data: {group: new Group()}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result!=undefined){
				this.groupService.saveAndPush(result.group);
			}
		});
	}

}

import { Component, Input, OnInit } from '@angular/core';
import { AthleteGroup } from 'src/app/models/athleteGroup.model';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-athlete-group-preview',
  templateUrl: './athlete-group-preview.component.html',
  styleUrls: ['./athlete-group-preview.component.css']
})
export class AthleteGroupPreviewComponent implements OnInit {
  @Input() athleteGroup:AthleteGroup;
	group:Group;

  constructor(private groupService:GroupService) { }

  ngOnInit() {
		this.group = this.groupService.getGroup(this.athleteGroup.idgroup);
	}

}

import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group.model';

@Component({
  selector: 'app-group-preview',
  templateUrl: './group-preview.component.html',
  styleUrls: ['./group-preview.component.css']
})
export class GroupPreviewComponent implements OnInit {
	@Input() group:Group;
	constructor() { }

	ngOnInit() {
	}

}

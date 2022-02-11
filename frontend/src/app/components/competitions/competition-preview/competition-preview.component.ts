import { Component, Input, OnInit } from '@angular/core';
import { Competition } from 'src/app/models/competition.model';

@Component({
	selector: 'app-competition-preview',
	templateUrl: './competition-preview.component.html',
	styleUrls: ['./competition-preview.component.css']
})
export class CompetitionPreviewComponent implements OnInit {
	@Input() competition:Competition;
	constructor() { }

	ngOnInit() {
	}

}

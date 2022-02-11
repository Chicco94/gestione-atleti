import { Component, Input, OnInit } from '@angular/core';
import { Athlete } from 'src/app/models/athlete.model';

@Component({
	selector: 'app-athlete-preview',
	templateUrl: './athlete-preview.component.html',
	styleUrls: ['./athlete-preview.component.css']
})
export class AthletePreviewComponent implements OnInit {
	@Input() athlete:Athlete;
	constructor() { }

	ngOnInit() {
	}
}

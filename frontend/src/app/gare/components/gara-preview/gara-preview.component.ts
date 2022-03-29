import { Component, Input, OnInit } from '@angular/core';
import { Gara } from '../../models/gara.model';

@Component({
	selector: 'app-gara-preview',
	templateUrl: './gara-preview.component.html',
	styleUrls: ['./gara-preview.component.scss']
})
export class GaraPreviewComponent implements OnInit {

	@Input() gara:Gara = new Gara();
	constructor() { }

	ngOnInit(): void {
	}

}

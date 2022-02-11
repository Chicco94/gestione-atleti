import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
	mobile:boolean=false; // identifica se sono su mobile o meno
	constructor() { }

	ngOnInit() {
		this.mobile = window.innerWidth <= 400;
	}

	onResize(event) {
		this.mobile = event.target.innerWidth <= 400;
	}
}

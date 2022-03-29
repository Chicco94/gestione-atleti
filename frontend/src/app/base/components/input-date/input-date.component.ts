import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-input-date',
	templateUrl: './input-date.component.html',
	styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {
	@Input() placeholder:string = "";
	@Input() model:Date = new Date();
	@Output() modelChange:EventEmitter<Date> = new EventEmitter<Date>();

	constructor() { }

	ngOnInit(): void {
	}

	onModelChange(value: Date) {
		this.modelChange.emit(value);
	}
}

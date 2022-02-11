import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-date-field',
	templateUrl: './date-field.component.html',
	styleUrls: ['./date-field.component.css']
})
export class DateFieldComponent implements OnInit {
	@Input() model:Object;
	@Input() placeholder?:string = '';
	@Input() disabled?:boolean = false;

	@Output() modelChange = new EventEmitter<Object>();
	constructor() { }

	ngOnInit() {
	}

	onModelChange(){
		this.modelChange.emit(this.model);
	}
	
}

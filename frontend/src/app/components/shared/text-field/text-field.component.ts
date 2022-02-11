import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-text-field',
	templateUrl: './text-field.component.html',
	styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {
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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SexEnum } from 'src/app/models/enumerations';

@Component({
	selector: 'app-sex-field',
	templateUrl: './sex-field.component.html',
	styleUrls: ['./sex-field.component.css']
})
export class SexFieldComponent implements OnInit {
	@Input() model:Object;
	@Input() placeholder?:string = '';
	@Input() disabled?:boolean = false;

	sexEnum = SexEnum;
	
	@Output() modelChange = new EventEmitter<Object>();
	constructor() { }

	ngOnInit() {
	}

	onModelChange(){
		this.modelChange.emit(this.model);
	}

}

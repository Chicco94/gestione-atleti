import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { SpecialityEnum } from 'src/app/models/enumerations';

@Component({
  selector: 'app-speciality-field',
  templateUrl: './speciality-field.component.html',
  styleUrls: ['./speciality-field.component.css']
})
export class SpecialityFieldComponent implements OnInit {
	@Input() model:Object;
	@Input() placeholder?:string = '';
	@Input() disabled?:boolean = false;

	specialityEnum = SpecialityEnum;
	
	@Output() modelChange = new EventEmitter<Object>();
	constructor() { }

	ngOnInit() {
	}

	onModelChange(){
		this.modelChange.emit(this.model);
	}
}

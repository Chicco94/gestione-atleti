import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryEnum } from 'src/app/models/enumerations';

@Component({
  selector: 'app-category-field',
  templateUrl: './category-field.component.html',
  styleUrls: ['./category-field.component.css']
})
export class CategoryFieldComponent implements OnInit {
	@Input() model:Object;
	@Input() placeholder?:string = '';
	@Input() disabled?:boolean = false;

	categoryEnum = CategoryEnum;
	
	@Output() modelChange = new EventEmitter<Object>();
	constructor() { }

	ngOnInit() {
	}

	onModelChange(){
		this.modelChange.emit(this.model);
	}
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SideEnum } from 'src/app/models/enumerations';

@Component({
  selector: 'app-side-field',
  templateUrl: './side-field.component.html',
  styleUrls: ['./side-field.component.css']
})
export class SideFieldComponent implements OnInit {
	@Input() model:Object;
	@Input() placeholder?:string = '';
	@Input() disabled?:boolean = false;

	sideEnum = SideEnum;

  @Output() modelChange = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  }

  onModelChange(){
		this.modelChange.emit(this.model);
	}

}

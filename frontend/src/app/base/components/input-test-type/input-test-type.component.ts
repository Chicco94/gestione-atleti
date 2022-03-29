import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestTypeEnum } from '../../models/enumerations';

@Component({
	selector: 'app-input-test-type',
	templateUrl: './input-test-type.component.html',
	styleUrls: ['./input-test-type.component.scss']
})
export class InputTestTypeComponent implements OnInit {
	@Input() placeholder:string = "";
	@Input() model:string = TestTypeEnum.Crono;
	testTypeEnum = TestTypeEnum;
	enumKeys:string[]=[];
	@Output() modelChange:EventEmitter<string> = new EventEmitter<string>();

	constructor() { }

	ngOnInit(): void {
		this.enumKeys=Object.keys(this.testTypeEnum);
	}

	onModelChange(value: string) {
		this.modelChange.emit(value);
	}
}

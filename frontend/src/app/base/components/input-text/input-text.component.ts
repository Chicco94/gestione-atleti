import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-input-text',
	templateUrl: './input-text.component.html',
	styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
	@Input() placeholder:string = "";
	@Input() model:string = ""
	@Input() disabled:boolean = false;
	@Input() hiddenCharacters:boolean = false;
	@Output() modelChange:EventEmitter<string> = new EventEmitter<string>();
	
	constructor() { }

	ngOnInit(): void {
	}

	onModelChange(value: string) {
		this.modelChange.emit(value);
	}

	toggleHiddenChars(){
		this.hiddenCharacters = !this.hiddenCharacters;
	}

	get inputType():string{
		return this.hiddenCharacters ? 'password' : 'text';
	}

}

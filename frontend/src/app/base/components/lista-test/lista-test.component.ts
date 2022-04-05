import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Test } from 'src/app/shared/models/test.model';

@Component({
	selector: 'app-lista-test',
	templateUrl: './lista-test.component.html',
	styleUrls: ['./lista-test.component.scss']
})
export class ListaTestComponent implements OnInit {
	
	@Input() addable:boolean=false;
	@Input() removable:boolean=false;
	@Input() editable:boolean=false;
	@Input() selectable:boolean=false;
	@Input() searchable:boolean=false;

	@Input() allowSelectAll:boolean=this.selectable;

	@Input() maxHeight:number=this.editable ? 100 : 50;

	@Input() sourceTestList:Test[] = [];
	@Input() targetTestList:Test[] = [];
	
	@Output() goToTest:EventEmitter<number> = new EventEmitter<number>();
	@Output() targetTestListChange:EventEmitter<Test[]> = new EventEmitter<Test[]>();

	searchString:string="";

	constructor() {}

	ngOnInit(): void {
	}

	getChanges(targetTestList:Test[]){
		this.targetTestListChange.emit(targetTestList);
	}
	go(idtest:number){
		this.goToTest.emit(idtest);
	}
}

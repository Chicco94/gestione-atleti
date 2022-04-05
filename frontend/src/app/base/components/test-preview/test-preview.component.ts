import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Test } from 'src/app/shared/models/test.model';

@Component({
	selector: 'app-test-preview',
	templateUrl: './test-preview.component.html',
	styleUrls: ['./test-preview.component.scss']
})
export class TestPreviewComponent implements OnInit {
	@Input() test:Test = new Test();
	@Input() targetTestList:Test[] = [];

	@Input() addable?:boolean = false;
	@Input() removable?:boolean = false;
	@Input() editable?:boolean = false;
	@Input() selectable?:boolean = false;

	@Input() subheader:boolean = true;
	
	@Output() goToTest:EventEmitter<number> = new EventEmitter<number>();
	@Output() targetTestListChange:EventEmitter<Test[]> = new EventEmitter<Test[]>();

	constructor() { }

	ngOnInit(): void {
	}

	select = ()=>{
		if (this.test.selected){
			this.test.selected = false;
			this.remove()
		} else {
			this.test.selected = true;
			this.add();
		}
	};

	add = ()=>{
		this.targetTestList = [...this.targetTestList,this.test];
		this.targetTestListChange.emit(this.targetTestList);
	};

	remove = ()=>{
		this.targetTestList.splice(this.targetTestList.indexOf(this.test),1);
		this.targetTestListChange.emit(this.targetTestList);
	};

	go = () =>{
		this.goToTest.emit(this.test.id);
	}
}

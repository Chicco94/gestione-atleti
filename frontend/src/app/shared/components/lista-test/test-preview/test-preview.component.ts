import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Test } from 'src/app/shared/models/test.model';

@Component({
  selector: 'app-test-preview',
  templateUrl: './test-preview.component.html',
  styleUrls: ['./test-preview.component.scss']
})
export class TestPreviewComponent implements OnInit {
  @Input() test:Test = new Test();
  @Input() testList:Test[] = [];

  @Input() addable?:boolean = false;
  @Input() removable?:boolean = false;

  @Output() testListChange:EventEmitter<Test[]> = new EventEmitter<Test[]>();

  constructor() { }

  ngOnInit(): void {
  }

  add = ()=>{
    this.testList = [...this.testList,this.test];
    this.testListChange.emit(this.testList);
  };

  remove = ()=>{
    this.testList.splice(this.testList.indexOf(this.test));
    this.testListChange.emit(this.testList);
  };
}

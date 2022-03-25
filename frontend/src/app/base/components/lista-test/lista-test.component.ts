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
  @Input() searchable:boolean=false;

  @Input() sourceTestList:Test[] = [];
  @Input() targetTestList:Test[] = [];
	@Input() goToTest:(idtest:number)=>void=()=>{}
  
  @Output() targetTestListChange:EventEmitter<Test[]> = new EventEmitter<Test[]>();

  searchString:string="";

  constructor() {}

  ngOnInit(): void {
  }

  getChanges(targetTestList:Test[]){
    this.targetTestListChange.emit(targetTestList);
  }
}

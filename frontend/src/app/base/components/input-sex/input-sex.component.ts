import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SexEnum } from '../../models/enumerations';

@Component({
  selector: 'app-input-sex',
  templateUrl: './input-sex.component.html',
  styleUrls: ['./input-sex.component.scss']
})
export class InputSexComponent implements OnInit {
  @Input() placeholder:string = "";
  @Input() model:string = SexEnum.Maschio;
  sexEnum = SexEnum;
  enumKeys:string[]=[];
  @Output() modelChange:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.enumKeys=Object.keys(this.sexEnum);
  }

  onModelChange(value: string) {
    this.modelChange.emit(value);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SideEnum } from '../../models/enumerations';

@Component({
  selector: 'app-input-side',
  templateUrl: './input-side.component.html',
  styleUrls: ['./input-side.component.scss']
})
export class InputSideComponent implements OnInit {
  @Input() placeholder:string = "";
  @Input() model:string = SideEnum.dx;
  sideEnum = SideEnum;
  @Output() modelChange:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onModelChange(value: string) {
    this.modelChange.emit(value);
  }
}

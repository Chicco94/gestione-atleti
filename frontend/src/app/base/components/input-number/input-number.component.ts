import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {
  @Input() placeholder:string = "";
  @Input() model:number = 0;
  @Input() disabled:boolean = false;
  @Output() modelChange:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onModelChange(value: number) {
    this.modelChange.emit(value);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Atleta } from '../../../models/atleta.model';

@Component({
  selector: 'app-atleta-preview',
  templateUrl: './atleta-preview.component.html',
  styleUrls: ['./atleta-preview.component.scss']
})
export class AtletaPreviewComponent implements OnInit {
  @Input() atleta:Atleta = new Atleta;

  @Input() selected:boolean = false;
  @Input() selectable:boolean = false;

  @Input() editable:boolean = false;

  
  @Output() selectedChange:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {}

  onModelChange(){
    this.selectedChange.emit(this.selected);
  }
}

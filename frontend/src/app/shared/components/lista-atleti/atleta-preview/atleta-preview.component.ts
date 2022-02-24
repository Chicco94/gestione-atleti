import { Component, Input, OnInit } from '@angular/core';
import { Atleta } from '../../../models/atleta.model';

@Component({
  selector: 'app-atleta-preview',
  templateUrl: './atleta-preview.component.html',
  styleUrls: ['./atleta-preview.component.scss']
})
export class AtletaPreviewComponent implements OnInit {
  @Input() atleta:Atleta = new Atleta;
  @Input() selectable:boolean = false;
  @Input() editable:boolean = false;
  constructor() { }

  ngOnInit(): void {}

}

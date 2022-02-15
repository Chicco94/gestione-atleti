import { Component, Input, OnInit } from '@angular/core';
import { Athlete } from '../../models/athlete.model';

@Component({
  selector: 'app-atleta-preview',
  templateUrl: './atleta-preview.component.html',
  styleUrls: ['./atleta-preview.component.scss']
})
export class AtletaPreviewComponent implements OnInit {
  @Input() atleta:Athlete = new Athlete;
  @Input() selectable:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}

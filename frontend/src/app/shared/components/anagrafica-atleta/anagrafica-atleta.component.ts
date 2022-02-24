import { Component, OnInit } from '@angular/core';
import { SexEnum } from 'src/app/base/models/enumerations';
import { Atleta } from '../../models/atleta.model';

@Component({
  selector: 'app-anagrafica-atleta',
  templateUrl: './anagrafica-atleta.component.html',
  styleUrls: ['./anagrafica-atleta.component.scss']
})
export class AnagraficaAtletaComponent implements OnInit {
  atleta:Atleta = new Atleta();
  sexEnum = SexEnum;
  constructor() { }

  ngOnInit(): void {
  }

}

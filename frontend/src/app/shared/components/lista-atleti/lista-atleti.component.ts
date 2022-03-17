import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Atleta } from '../../models/atleta.model';
import { AtletaAllenamentoService } from '../../services/atleta-allenamento.service';
import { AtletaService } from '../../services/atleta.service';

@Component({
  selector: 'app-lista-atleti',
  templateUrl: './lista-atleti.component.html',
  styleUrls: ['./lista-atleti.component.scss']
})
export class ListaAtletiComponent implements OnInit {

  @Input() addable:boolean=false;
  @Input() selectable:boolean=false;
  @Input() editable:boolean=false;
  @Input() searchable:boolean=false;
  
  @Input() sourceAtletaList:Atleta[] = [];
  @Input() targetAtletaList:number[] = [];

  @Output() targetAtletaListChange:EventEmitter<number[]> = new EventEmitter<number[]>();

  searchString:string="";

  constructor() {}

  ngOnInit(): void {
  }

  getChanges(targetAtletaList:number[]){
    this.targetAtletaListChange.emit(targetAtletaList);
  }

}

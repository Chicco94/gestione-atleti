import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Atleta } from '../../models/atleta.model';
import { AtletaService } from '../../services/atleta.service';

@Component({
  selector: 'app-lista-atleti',
  templateUrl: './lista-atleti.component.html',
  styleUrls: ['./lista-atleti.component.scss']
})
export class ListaAtletiComponent implements OnInit {
  @Input() selectable:boolean=false;
  @Input() addable:boolean=false;
  @Input() editable:boolean=false;
  @Input() idallenamento:number=0;
  selezionati:Atleta[] = [];
  atleti:Atleta[] = [];
  searchString:string="";

  constructor(
    private route:ActivatedRoute,
    private athleteService:AtletaService
  ) {
    this.route.params.subscribe(params => {
      this.idallenamento = params['idallenamento'];
      this.selectable = params['selectable'] === 'true';
      this.editable = params['editable'] === 'true';
      this.addable = !this.editable;
    });
  }

  ngOnInit(): void {
    this.athleteService.fetchAtleti();
    this.athleteService.OnFetchAtleti().subscribe((data:any) => {
      this.atleti = data.map((single_data:any) => new Atleta().deserialize(single_data));
    });
  }

}

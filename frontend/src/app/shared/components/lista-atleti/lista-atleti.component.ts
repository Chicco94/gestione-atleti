import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Athlete } from '../../models/athlete.model';
import { AthleteService } from '../../services/athlete.service';

@Component({
  selector: 'app-lista-atleti',
  templateUrl: './lista-atleti.component.html',
  styleUrls: ['./lista-atleti.component.scss']
})
export class ListaAtletiComponent implements OnInit {
  @Input() selectable:boolean=false;
  @Input() idallenamento:number=0;
  selezionati:Athlete[] = [];
  atleti:Athlete[] = []
  searchString:string="";

  constructor(
    private route:ActivatedRoute,
    private athleteService:AthleteService
  ) {
    this.route.params.subscribe(params => {
      this.selectable = params['selectable'] === 'true';
      this.idallenamento = params['idallenamento'];
    });
  }

  ngOnInit(): void {
    this.atleti = this.athleteService.list;
  }

}

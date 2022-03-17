import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Atleta } from 'src/app/shared/models/atleta.model';
import { AtletaAllenamentoService } from 'src/app/shared/services/atleta-allenamento.service';
import { AtletaService } from 'src/app/shared/services/atleta.service';

@Component({
  selector: 'app-allenamento-select-atleta',
  templateUrl: './allenamento-select-atleta.component.html',
  styleUrls: ['./allenamento-select-atleta.component.scss']
})
export class AllenamentoSelectAtletaComponent implements OnInit {
  idallenamento:number=0;
  selezionati:number[] = [];
  atleti:Atleta[] = [];
  searchString:string="";

  __OnFetchAtleti__:Subscription = new Subscription();
  __OnGetAtleta__:Subscription = new Subscription();
  __OnGetAtletaAllenamentoByAllenamento__:Subscription = new Subscription();

  constructor(
    private route:ActivatedRoute,
    private atletaService:AtletaService,
    private atletaAllenamentoService:AtletaAllenamentoService
  ) {
    this.route.params.subscribe(params => {
      this.idallenamento = params['idallenamento'];

      this.atletaAllenamentoService.getAtletaAllenamentoByAllenamento(this.idallenamento);    
      this.atletaService.fetchAtleti();
    });
  }

  ngOnInit(): void {
    this.__OnFetchAtleti__ = this.atletaService.OnFetchAtleti().subscribe((data:any) => {
      this.atleti = data.map((single_data:any) => new Atleta().deserialize(single_data));
    });
    this.__OnGetAtleta__ = this.atletaService.OnGetAtleta().subscribe((data:any) => {
      this.selezionati =[...this.selezionati,data.id];
    });
    this.__OnGetAtletaAllenamentoByAllenamento__ = this.atletaAllenamentoService.OnGetAtletaAllenamentoByAllenamento().subscribe((data:any) => {
      data.forEach( (element:any) => {
        this.atletaService.getAtleta(element.idatleta);
      });
    })
  }

  ngOnDestroy():void{
    this.__OnFetchAtleti__.unsubscribe();
    this.__OnGetAtleta__.unsubscribe();
    this.__OnGetAtletaAllenamentoByAllenamento__.unsubscribe();
  }

  confirm(){
    this.atletaAllenamentoService.setAtletaToAllenamento(this.idallenamento, this.selezionati);
  }
}

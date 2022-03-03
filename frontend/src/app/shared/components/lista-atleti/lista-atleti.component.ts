import { Component, Input, OnInit } from '@angular/core';
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
  @Input() selectable:boolean=false;
  @Input() addable:boolean=false;
  @Input() editable:boolean=false;
  @Input() idallenamento:number=0;
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
      this.selectable = params['selectable'] === 'true';
      this.editable = params['editable'] === 'true';
      this.addable = !this.editable;

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

  onNgModelChange(event:any){
    console.log('on ng model change', event);
  }

  confirm(){
    console.log(this.selezionati)
    this.atletaAllenamentoService.setAtletaToAllenamento(this.idallenamento, this.selezionati);
  }

}

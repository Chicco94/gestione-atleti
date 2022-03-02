import { Component, OnInit } from '@angular/core';
import { Allenamento } from '../../models/allenamento.model';
import { AllenamentoService } from '../../services/allenamento.service';

@Component({
  selector: 'app-lista-allenamenti',
  templateUrl: './lista-allenamenti.component.html',
  styleUrls: ['./lista-allenamenti.component.scss']
})
export class ListaAllenamentiComponent implements OnInit {
  allenamenti:Allenamento[] = [];
  searchString:string = "";

  constructor(
    private allenamentoService:AllenamentoService
  ) {}

  ngOnInit(): void {
    this.allenamentoService.fetchAllenamenti();
    this.allenamentoService.OnFetchAllenamenti().subscribe((data:any) => {
      this.allenamenti = data.map((single_data:any) => new Allenamento().deserialize(single_data));
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { Allenamento } from 'src/app/allenamenti/models/allenamento.model';
import { Test } from 'src/app/allenamenti/models/test.model';
import { AllenamentoService } from 'src/app/allenamenti/services/allenamento.service';
import { TestService } from 'src/app/allenamenti/services/test.service';

@Component({
  selector: 'app-lista-test',
  templateUrl: './lista-test.component.html',
  styleUrls: ['./lista-test.component.scss']
})
export class ListaTestComponent implements OnInit {
  @Input() selectable:boolean=false;
  @Input() idallenamento:number=0;
  allenamento:Allenamento = new Allenamento();
  possible_tests:Test[] = [];
  added_tests:Test[] = [];
  searchString:string="";

  constructor(
    private route:ActivatedRoute,
    private allenamentoService:AllenamentoService,
    private testService:TestService
  ) {
    this.route.params.subscribe(params => {
      this.selectable = params['selectable'] === 'true';
      this.idallenamento = params['idallenamento'];
      this.allenamento = this.allenamentoService.getAllenamento(this.idallenamento);
    });
  }

  ngOnInit(): void {
    this.possible_tests = this.testService.list;
    this.added_tests = this.allenamento.test || [];
  }

}

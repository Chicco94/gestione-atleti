import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Allenamento } from 'src/app/allenamenti/models/allenamento.model';
import { Test } from 'src/app/shared/models/test.model';
import { AllenamentoService } from 'src/app/allenamenti/services/allenamento.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-lista-test',
  templateUrl: './lista-test.component.html',
  styleUrls: ['./lista-test.component.scss']
})
export class ListaTestComponent implements OnInit {
  @Input() selectable:boolean=false;
  @Input() addable:boolean=false;
  @Input() editable:boolean=false;
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
      this.editable = params['editable'] === 'true';
      this.addable = !this.editable;
      this.idallenamento = params['idallenamento'];
      this.allenamentoService.getAllenamento(this.idallenamento);
    });
  }

  ngOnInit(): void {
    this.testService.fetchTests();
    this.testService.OnFetchTests().subscribe((data:any) => {
      this.possible_tests = data.map((single_data:any) => new Test().deserialize(single_data));
    });
    this.added_tests = this.allenamento.test || [];
  }

}

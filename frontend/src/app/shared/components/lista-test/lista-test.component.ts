import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Test } from 'src/app/shared/models/test.model';
import { TestService } from 'src/app/shared/services/test.service';
import { TestAllenamentoService } from '../../services/test-allenamento.service';

@Component({
  selector: 'app-lista-test',
  templateUrl: './lista-test.component.html',
  styleUrls: ['./lista-test.component.scss']
})
export class ListaTestComponent implements OnInit,OnDestroy {
  @Input() selectable:boolean=false;
  @Input() addable:boolean=false;
  @Input() editable:boolean=false;
  @Input() idallenamento:number=0;
  possible_tests:Test[] = [];
  selected_tests:Test[] = [];
  searchString:string="";

  __OnFetchTests__:Subscription = new Subscription();
  __OnGetTest__:Subscription = new Subscription();
  __OnGetTestAllenamentoByAllenamento__:Subscription = new Subscription();

  constructor(
    private route:ActivatedRoute,
    private testAllenamentoService:TestAllenamentoService,
    private testService:TestService
  ) {
    this.route.params.subscribe(params => {
      this.selectable = params['selectable'] === 'true';
      this.editable = params['editable'] === 'true';
      this.addable = !this.editable;
      this.idallenamento = params['idallenamento'];

      this.testAllenamentoService.getTestAllenamentoByAllenamento(this.idallenamento);    
      this.testService.fetchTests();
    });
  }

  ngOnInit(): void {
    this.__OnFetchTests__ = this.testService.OnFetchTests().subscribe((data:any) => {
      this.possible_tests = data.map((single_data:any) => new Test().deserialize(single_data));
    });
    this.__OnGetTest__ = this.testService.OnGetTest().subscribe((data:any) => {
      this.selected_tests =[...this.selected_tests,new Test().deserialize(data)];
    });
    this.__OnGetTestAllenamentoByAllenamento__ = this.testAllenamentoService.OnGetTestAllenamentoByAllenamento().subscribe((data:any) => {
      data.forEach( (element:any) => {
        this.testService.getTest(element.idtest);
      });
    })
  }

  ngOnDestroy():void{
    this.__OnFetchTests__.unsubscribe();
    this.__OnGetTest__.unsubscribe();
    this.__OnGetTestAllenamentoByAllenamento__.unsubscribe();
  }

  confirm(){
    this.testAllenamentoService.setTestToAllenamento(this.idallenamento, this.selected_tests);
  }

}

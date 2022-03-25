import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Test } from 'src/app/shared/models/test.model';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-gestione-test',
  templateUrl: './gestione-test.component.html',
  styleUrls: ['./gestione-test.component.scss']
})
export class GestioneTestComponent implements OnInit {
  tests:Test[] = [];

  __OnFetchTests__:Subscription = new Subscription();

  constructor(private testService:TestService) {
    this.testService.fetchTests();
  }

  ngOnInit(): void {
    this.__OnFetchTests__ = this.testService.OnFetchTests().subscribe((data:any) => {
      this.tests = data.map((single_data:any) => new Test().deserialize(single_data));
    });
  }
  ngOnDestroy():void{
    this.__OnFetchTests__.unsubscribe();
  }
  confirm(){
    
  }
  goToTest(idtest:number){
    this.testService.goToTest(idtest);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test } from '../../models/test.model';
import { TestService } from '../../services/test.service';

@Component({
	selector: 'app-anagrafica-test',
	templateUrl: './anagrafica-test.component.html',
	styleUrls: ['./anagrafica-test.component.scss']
})
export class AnagraficaTestComponent implements OnInit {
	test:Test = new Test();

	constructor(
		private route:ActivatedRoute,
		private testService:TestService
	) { 
		this.route.params.subscribe(params => {this.testService.getTest(params['id']);});
	}

	ngOnInit(): void {
		this.testService.OnGetTest().subscribe((data:any) => {
			if (data != null && data['id'] > 0) this.test = new Test().deserialize(data);
		});
	}

	save(){
		if (this.test.id > 0){
			this.testService.updateTest(this.test);
		} else {
			this.testService.addTest(this.test);
		}
	}
	delete(){
		this.testService.deleteTest(this.test.id);
	}

}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { AllenamentiComponent } from './allenamenti.component';
import { AllenamentoService, MockAllenamentoService } from './services/allenamento.service';

describe('AllenamentiComponent', () => {
	let component: AllenamentiComponent;
	let fixture: ComponentFixture<AllenamentiComponent>;
	let route: ActivatedRoute;
	let router: Router;
	let dialog: MatDialog;
	let allenamentoService: AllenamentoService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AllenamentiComponent ],
			providers:[
				AllenamentiComponent,
				{provide: AllenamentoService, useClass: MockAllenamentoService },
				{provide: ActivatedRoute, useValue: {params: of({id: 1})} },
				{provide: Router, useClass: MockAllenamentoService },
				{provide: MatDialog, useClass: MockMatDialog },
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(AllenamentiComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

class MockRouter {
    navigateByUrl(url: string) { return url; }
}
class MockMatDialog {
}
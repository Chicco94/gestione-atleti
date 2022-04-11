import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockTestService, TestService } from 'src/app/shared/services/test.service';

import { GestioneTestComponent } from './gestione-test.component';

describe('GestioneTestComponent', () => {
	let component: GestioneTestComponent;
	let fixture: ComponentFixture<GestioneTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ GestioneTestComponent ],
			providers:[
				GestioneTestComponent,
				{provide: TestService, useClass: MockTestService }
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(GestioneTestComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtletaService, MockAtletaService } from 'src/app/shared/services/atleta.service';

import { GestioneAtletiComponent } from './gestione-atleti.component';

describe('GestioneAtletiComponent', () => {
	let component: GestioneAtletiComponent;
	let fixture: ComponentFixture<GestioneAtletiComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ GestioneAtletiComponent ],
			providers:[
				GestioneAtletiComponent,
				{provide: AtletaService, useClass: MockAtletaService }
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(GestioneAtletiComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

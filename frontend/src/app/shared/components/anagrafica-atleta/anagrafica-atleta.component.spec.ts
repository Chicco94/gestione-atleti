import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AtletaService, MockAtletaService } from '../../services/atleta.service';

import { AnagraficaAtletaComponent } from './anagrafica-atleta.component';

describe('AnagraficaAtletaComponent', () => {
	let component: AnagraficaAtletaComponent;
	let fixture: ComponentFixture<AnagraficaAtletaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AnagraficaAtletaComponent ],
			providers:[
				AnagraficaAtletaComponent,
				{provide: AtletaService, useClass: MockAtletaService },
				{provide: ActivatedRoute, useValue: {params: of({id: 1})} }
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(AnagraficaAtletaComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

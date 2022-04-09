import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MockRisultatoService, RisultatoService } from 'src/app/allenamenti/services/risultato.service';
import { GaraService, MockGaraService } from '../../services/gara.service';

import { GareggiaComponent } from './gareggia.component';

describe('GareggiaComponent', () => {
	let component: GareggiaComponent;
	let fixture: ComponentFixture<GareggiaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ GareggiaComponent ],
			providers:[
				GareggiaComponent,
				{provide: RisultatoService, useClass: MockRisultatoService },
				{provide: GaraService, useClass: MockGaraService },
				{provide: ActivatedRoute, useValue: {params: of({id: 1})} }
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(GareggiaComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

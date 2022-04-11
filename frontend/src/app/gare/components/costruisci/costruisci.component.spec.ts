import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MockRisultatoService, RisultatoService } from 'src/app/allenamenti/services/risultato.service';
import { GaraService, MockGaraService } from '../../services/gara.service';

import { CostruisciComponent } from './costruisci.component';

describe('CostruisciComponent', () => {
	let component: CostruisciComponent;
	let fixture: ComponentFixture<CostruisciComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ CostruisciComponent ],
			providers:[
				CostruisciComponent,
				{provide: RisultatoService, useClass: MockRisultatoService },
				{provide: GaraService, useClass: MockGaraService },
				{provide: ActivatedRoute, useValue: {params: of({idgara: 1})} }
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(CostruisciComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

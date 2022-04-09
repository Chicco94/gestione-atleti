import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPipe } from 'src/app/base/pipes/search.pipe';
import { AllenamentoService, MockAllenamentoService } from '../../services/allenamento.service';

import { ListaAllenamentiComponent } from './lista-allenamenti.component';

describe('ListaAllenamentiComponent', () => {
	let component: ListaAllenamentiComponent;
	let fixture: ComponentFixture<ListaAllenamentiComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ListaAllenamentiComponent, SearchPipe ],
			providers:[
				ListaAllenamentiComponent,
				{provide: AllenamentoService, useClass: MockAllenamentoService },
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(ListaAllenamentiComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

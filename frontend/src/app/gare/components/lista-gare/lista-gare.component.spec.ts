import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPipe } from 'src/app/base/pipes/search.pipe';
import { GaraService, MockGaraService } from '../../services/gara.service';

import { ListaGareComponent } from './lista-gare.component';

describe('ListaGareComponent', () => {
	let component: ListaGareComponent;
	let fixture: ComponentFixture<ListaGareComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ListaGareComponent, SearchPipe ],
			providers:[
				ListaGareComponent,
				{provide: GaraService, useClass: MockGaraService },
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(ListaGareComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

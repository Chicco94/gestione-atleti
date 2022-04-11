import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPipe } from '../../pipes/search.pipe';

import { ListaRisultatiComponent } from './lista-risultati.component';

describe('ListaRisultatiComponent', () => {
	let component: ListaRisultatiComponent;
	let fixture: ComponentFixture<ListaRisultatiComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ListaRisultatiComponent, SearchPipe ],
			providers:[
				ListaRisultatiComponent
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(ListaRisultatiComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

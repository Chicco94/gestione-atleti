import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPipe } from '../../pipes/search.pipe';

import { ListaAtletiComponent } from './lista-atleti.component';

describe('ListaAtletiComponent', () => {
	let component: ListaAtletiComponent;
	let fixture: ComponentFixture<ListaAtletiComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ListaAtletiComponent, SearchPipe ],
			providers:[
				ListaAtletiComponent,
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(ListaAtletiComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

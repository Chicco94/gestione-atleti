import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPipe } from '../../pipes/search.pipe';

import { ListaTestComponent } from './lista-test.component';

describe('ListaTestComponent', () => {
	let component: ListaTestComponent;
	let fixture: ComponentFixture<ListaTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ListaTestComponent, SearchPipe ],
			providers:[
				ListaTestComponent
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(ListaTestComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

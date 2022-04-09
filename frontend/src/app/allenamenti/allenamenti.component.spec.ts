import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { AllenamentiComponent } from './allenamenti.component';
import { AllenamentoService, MockAllenamentoService } from './services/allenamento.service';

describe('AllenamentiComponent', () => {
	let component: AllenamentiComponent;
	let fixture: ComponentFixture<AllenamentiComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ AllenamentiComponent ],
			providers:[
				AllenamentiComponent,
				{provide: AllenamentoService, useClass: MockAllenamentoService },
				{provide: ActivatedRoute, useValue: {params: of({id: 1})} },
				{provide: MatDialog, useClass: MockMatDialog },
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(AllenamentiComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

class MockRouter {
    navigateByUrl(url: string) { return url; }
}
class MockMatDialog {
}
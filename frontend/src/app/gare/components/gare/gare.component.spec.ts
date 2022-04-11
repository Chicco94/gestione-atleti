import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { GaraService, MockGaraService } from '../../services/gara.service';

import { GareComponent } from './gare.component';

describe('GareComponent', () => {
	let component: GareComponent;
	let fixture: ComponentFixture<GareComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			declarations: [ GareComponent ],
			providers:[
				GareComponent,
				{provide: MatDialog, useClass: MockMatDialog },
				{provide: GaraService, useClass: MockGaraService },
				{provide: ActivatedRoute, useValue: {params: of({idgara: 1})} }
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(GareComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

class MockMatDialog {
}
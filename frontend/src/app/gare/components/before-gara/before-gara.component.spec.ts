import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRefMock } from 'src/app/allenamenti/components/before-allenamento/before-allenamento.component.spec';
import { Gara } from '../../models/gara.model';

import { BeforeGaraComponent } from './before-gara.component';

describe('BeforeGaraComponent', () => {
	let component: BeforeGaraComponent;
	let fixture: ComponentFixture<BeforeGaraComponent>;
	let data = new Gara();

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ BeforeGaraComponent ],
			providers:[
				BeforeGaraComponent,
				{ provide: MatDialogRef, useClass: MatDialogRefMock },
				{ provide: MAT_DIALOG_DATA, useValue: data }
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(BeforeGaraComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

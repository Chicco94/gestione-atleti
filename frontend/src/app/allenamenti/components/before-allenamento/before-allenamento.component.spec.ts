import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Allenamento } from '../../models/allenamento.model';

import { BeforeAllenamentoComponent } from './before-allenamento.component';

describe('BeforeAllenamentoComponent', () => {
	let component: BeforeAllenamentoComponent;
	let fixture: ComponentFixture<BeforeAllenamentoComponent>;
	let data = new Allenamento()

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ BeforeAllenamentoComponent ],
			providers:[
				BeforeAllenamentoComponent,
				{ provide: MatDialogRef, useClass: MatDialogRefMock },
				{ provide: MAT_DIALOG_DATA, useValue: data }
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(BeforeAllenamentoComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

export class MatDialogRefMock {
    close(value = '') {
    }
}

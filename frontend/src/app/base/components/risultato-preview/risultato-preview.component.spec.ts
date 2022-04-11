import	{	ComponentFixture,	TestBed	}	from	'@angular/core/testing';
import { BaseModule } from '../../base.module';
import { MaterialModule } from '../../material.module';

import	{	RisultatoPreviewComponent	}	from	'./risultato-preview.component';

describe('RisultatoPreviewComponent',	()	=>	{
		let	component:	RisultatoPreviewComponent;
		let	fixture:	ComponentFixture<RisultatoPreviewComponent>;

		beforeEach(async	()	=>	{
				await	TestBed.configureTestingModule({
						declarations:	[	RisultatoPreviewComponent	],
						imports:[ BaseModule ],
				})
				.compileComponents();
		});

		beforeEach(()	=>	{
				fixture	=	TestBed.createComponent(RisultatoPreviewComponent);
				component	=	fixture.componentInstance;
				fixture.detectChanges();
		});

		it('should	create',	()	=>	{
				expect(component).toBeTruthy();
		});
});

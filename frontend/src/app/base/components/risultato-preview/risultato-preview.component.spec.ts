import	{	ComponentFixture,	TestBed	}	from	'@angular/core/testing';

import	{	RisultatoPreviewComponent	}	from	'./risultato-preview.component';

describe('RisultatoPreviewComponent',	()	=>	{
		let	component:	RisultatoPreviewComponent;
		let	fixture:	ComponentFixture<RisultatoPreviewComponent>;

		beforeEach(async	()	=>	{
				await	TestBed.configureTestingModule({
						declarations:	[	RisultatoPreviewComponent	]
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

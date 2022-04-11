import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
	let service: NavigationService;
	let location: jasmine.SpyObj<Location>;

	beforeEach(() => {
		const loc = jasmine.createSpyObj("Location", ["back"]);
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			providers:[
				NavigationService,
				{provide: Location, useValue: loc }
			]
		});
		service = TestBed.inject(NavigationService);
		location = TestBed.inject(Location) as jasmine.SpyObj<Location>;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});

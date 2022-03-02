import { TestBed } from '@angular/core/testing';

import { AtletaAllenamentoService } from './atleta-allenamento.service';

describe('AtletaAllenamentoService', () => {
  let service: AtletaAllenamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtletaAllenamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

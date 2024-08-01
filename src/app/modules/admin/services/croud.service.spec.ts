import { TestBed } from '@angular/core/testing';

import { CroudService } from './croud.service';

describe('CroudService', () => {
  let service: CroudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CroudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

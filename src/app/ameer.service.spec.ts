import { TestBed } from '@angular/core/testing';

import { AmeerService } from './ameer.service';

describe('AmeerService', () => {
  let service: AmeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ApiUsedCars } from './api-used-cars';

describe('ApiUsedCars', () => {
  let service: ApiUsedCars;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUsedCars);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ApiCarsSales } from './api-cars-sales';

describe('ApiCarsSales', () => {
  let service: ApiCarsSales;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCarsSales);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

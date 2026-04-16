import { TestBed } from '@angular/core/testing';

import { ApiNewCars } from './api-new-cars';

describe('ApiNewCars', () => {
  let service: ApiNewCars;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNewCars);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ApiCarMaintenance } from './api-car-maintenance';

describe('ApiCarMaintenance', () => {
  let service: ApiCarMaintenance;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCarMaintenance);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

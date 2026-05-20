import { TestBed } from '@angular/core/testing';

import { ApiRentShow } from './api-rent-show';

describe('ApiRentShow', () => {
  let service: ApiRentShow;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRentShow);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

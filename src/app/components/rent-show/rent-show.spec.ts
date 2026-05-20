import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentShow } from './rent-show';

describe('RentShow', () => {
  let component: RentShow;
  let fixture: ComponentFixture<RentShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

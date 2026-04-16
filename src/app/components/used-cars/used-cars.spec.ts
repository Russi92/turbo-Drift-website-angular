import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedCars } from './used-cars';

describe('UsedCars', () => {
  let component: UsedCars;
  let fixture: ComponentFixture<UsedCars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedCars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedCars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

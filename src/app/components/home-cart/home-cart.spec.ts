import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCart } from './home-cart';

describe('HomeCart', () => {
  let component: HomeCart;
  let fixture: ComponentFixture<HomeCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

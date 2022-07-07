import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCatererComponent } from './order-caterer.component';

describe('OrderCatererComponent', () => {
  let component: OrderCatererComponent;
  let fixture: ComponentFixture<OrderCatererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCatererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCatererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

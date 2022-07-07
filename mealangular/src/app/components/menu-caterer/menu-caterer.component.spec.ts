import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCatererComponent } from './menu-caterer.component';

describe('MenuCatererComponent', () => {
  let component: MenuCatererComponent;
  let fixture: ComponentFixture<MenuCatererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCatererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCatererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

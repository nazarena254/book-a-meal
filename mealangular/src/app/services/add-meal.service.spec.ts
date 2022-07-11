import { TestBed } from '@angular/core/testing';

import { AddMealService } from './add-meal.service';

describe('AddMealService', () => {
  let service: AddMealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

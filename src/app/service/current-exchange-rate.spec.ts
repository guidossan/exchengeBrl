import { TestBed } from '@angular/core/testing';

import { CurrentExchangeRate } from './current-exchange-rate';

describe('CurrentExchangeRate', () => {
  let service: CurrentExchangeRate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentExchangeRate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

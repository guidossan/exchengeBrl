import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertExchangeRate } from './convert-exchange-rate';

describe('ConvertExchangeRate', () => {
  let component: ConvertExchangeRate;
  let fixture: ComponentFixture<ConvertExchangeRate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertExchangeRate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertExchangeRate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

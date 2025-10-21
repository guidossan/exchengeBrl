import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertHistory } from './convert-history';

describe('ConvertHistory', () => {
  let component: ConvertHistory;
  let fixture: ComponentFixture<ConvertHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

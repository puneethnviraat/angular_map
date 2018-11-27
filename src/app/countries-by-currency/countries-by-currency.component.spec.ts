import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesByCurrencyComponent } from './countries-by-currency.component';

describe('CountriesByCurrencyComponent', () => {
  let component: CountriesByCurrencyComponent;
  let fixture: ComponentFixture<CountriesByCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesByCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesByCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

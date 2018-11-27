import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesByLangComponent } from './countries-by-lang.component';

describe('CountriesByLangComponent', () => {
  let component: CountriesByLangComponent;
  let fixture: ComponentFixture<CountriesByLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesByLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesByLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

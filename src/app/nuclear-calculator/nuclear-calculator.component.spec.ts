import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuclearCalculatorComponent } from './nuclear-calculator.component';

describe('NuclearCalculatorComponent', () => {
  let component: NuclearCalculatorComponent;
  let fixture: ComponentFixture<NuclearCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuclearCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuclearCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import {CalculatorComponent} from "./calculator.component";
import {Vanilla} from "../../mock-solarpanels";
import {ACC_VANILLA} from "../../mock-accumulators";
import {SolarInterface} from "../../solar-interface";
import {AccumulatorInterface} from "../../accumulator.interface";

describe('SolarCalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct values for 20 MW Vanilla (478 Panels & 402 Accumulators)', async () => {
    component.selectedPanel = <SolarInterface>Vanilla[0];
    component.selectedAccumulator = <AccumulatorInterface>ACC_VANILLA[0];
    component.powerNeeded=20;

    component.calculate();

    expect(component.neededSolarPanels).toBe(478);
    expect(component.neededAccumulators).toBe(402);
  })
});

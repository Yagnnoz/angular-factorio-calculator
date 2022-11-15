import { ComponentFixture, TestBed } from '@angular/core/testing';

import {SolarCalculatorComponent} from "./solar-calculator.component";
import {Vanilla} from "../../mock-solarpanels";
import {ACC_VANILLA} from "../../mock-accumulators";
import {SolarType} from "./types/solar.type";
import {AccumulatorType} from "./types/accumulator.type";

describe('SolarCalculatorComponent', () => {
  let component: SolarCalculatorComponent;
  let fixture: ComponentFixture<SolarCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarCalculatorComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SolarCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct values for 20 MW Vanilla (478 Panels & 402 Accumulators)', async () => {
    component.selectedPanel = <SolarType>Vanilla[0];
    component.selectedAccumulator = <AccumulatorType>ACC_VANILLA[0];
    component.powerNeeded=20;

    component.calculate();

    expect(component.neededSolarPanels).toBe(478);
    expect(component.neededAccumulators).toBe(402);
  })
});
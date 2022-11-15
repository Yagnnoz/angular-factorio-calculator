import {Component, OnInit} from '@angular/core';
import {Bobs, Vanilla} from "../mock-solarpanels";
import {ACC_BOBS, ACC_VANILLA} from "../mock-accumulators";
import {SolarInterface} from "../solar-interface";
import {AccumulatorInterface} from "../accumulator.interface";

@Component({
  selector: 'app-solar-calculator',
  templateUrl: './solar-calculator.component.html',
  styleUrls: ['./solar-calculator.component.scss']
})
export class SolarCalculatorComponent implements OnInit {

  panelsVanilla = Vanilla;
  panelsBobs = Bobs;
  accumulatorsVanilla = ACC_VANILLA;
  accumulatorsBobs = ACC_BOBS;

  selectedPanel: SolarInterface = Vanilla[0];
  selectedAccumulator: AccumulatorInterface = ACC_VANILLA[0];
  powerNeeded!: number;

  calculatedRatio: number = 0;
  neededSolarPanels: number = 0;
  neededAccumulators: number = 0;
  neededJoule: number = 0;

  SOLARCHARGESECONDS: number = 291.67;

  constructor() {
  }

  ngOnInit(): void {

  }

  calculate() {

    //first validate input number

    if (!isNaN(this.powerNeeded) && this.powerNeeded > 0 && this.selectedAccumulator !== undefined && this.selectedPanel !== undefined) {
      this.neededJoule = this.calculateNeededJoule(this.powerNeeded);
      this.calculatedRatio = this.calculateRatio();
      this.neededSolarPanels = this.calculateNeededSolarPanels(this.neededJoule);
      this.neededAccumulators = this.calculateNeededAccumulators(this.calculatedRatio, this.neededSolarPanels);

      //make both numbers nice and round
      this.neededSolarPanels = Math.ceil(this.neededSolarPanels);
      this.neededAccumulators = Math.ceil(this.neededAccumulators);
    }
  }

  private calculatePanelOutput(): number {


    if (this.selectedPanel) {

      return (this.selectedPanel?.powerInKW * this.SOLARCHARGESECONDS) / 1000;
    } else {
      return -1;
    }
  }

  private calculateNeededJoule(powerNeeded: number): number {
    return (powerNeeded * 416.66);
  }

  private calculateRatio(): number {
    if (this.selectedPanel && this.selectedAccumulator) {
      return 70 * this.selectedPanel?.powerInKW / (this.selectedAccumulator?.capacityInMJ * 1000);
    } else {
      return -1;
    }
  }

  private calculateNeededSolarPanels(joule: number): number {
    return (joule / this.calculatePanelOutput()) + 1;
  }

  private calculateNeededAccumulators(ratio: number, neededPanels: number): number {
    return (ratio * neededPanels) + 1;

  }

  reset(): void {
    this.powerNeeded = 0;
    this.calculatedRatio = 0;
    this.neededSolarPanels = 0;
    this.neededAccumulators = 0;
    this.neededJoule = 0;

  }

}

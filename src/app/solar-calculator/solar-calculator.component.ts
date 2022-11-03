import {Component, OnInit} from '@angular/core';
import {SOLARPANELS} from "../mock-solarpanels";
import {ACCUMULATORS} from "../mock-accumulators";
import {SolarInterface} from "../solar-interface";
import {AccumulatorInterface} from "../accumulator-interface";

@Component({
  selector: 'app-solar-calculator',
  templateUrl: './solar-calculator.component.html',
  styleUrls: ['./solar-calculator.component.css']
})
export class SolarCalculatorComponent implements OnInit {

  panels = SOLARPANELS;
  accumulators = ACCUMULATORS;
  selectedPanel!: SolarInterface;
  selectedAccumulator!: AccumulatorInterface;
  powerNeeded: number = 0;

  calculatedRatio: number = 0;
  neededSolarPanels: number = 0;
  neededAccumulators: number = 0;
  neededJoule: number = 0;

  SOLARCHARGESECONDS: number = 291.67;


  result: boolean = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  calculate() {

    //first validate input number

    if (!isNaN(this.powerNeeded) && this.powerNeeded>0) {
      this.neededJoule = this.calculateNeededJoule(this.powerNeeded);
      this.calculatedRatio = this.calculateRatio();
      this.neededSolarPanels = this.calculateNeededSolarPanels(this.neededJoule);
      this.neededAccumulators = this.calculateNeededAccumulators(this.calculatedRatio, this.neededSolarPanels);

      //make both numbers nice and round
      this.neededSolarPanels = Math.ceil(this.neededSolarPanels);
      this.neededAccumulators = Math.ceil(this.neededAccumulators);
      this.result = true;
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
    this.result = false;
    this.powerNeeded = 0;
    this.calculatedRatio = 0;
    this.neededSolarPanels = 0;
    this.neededAccumulators = 0;
    this.neededJoule = 0;

  }

}

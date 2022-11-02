import {Component, OnInit} from '@angular/core';
import {SOLARPANELS} from "../mock-solarpanels";
import {ACCUMULATORS} from "../mock-accumulators";

@Component({
  selector: 'app-solar-calculator',
  templateUrl: './solar-calculator.component.html',
  styleUrls: ['./solar-calculator.component.css']
})
export class SolarCalculatorComponent implements OnInit {

  panels = SOLARPANELS;
  accumulators = ACCUMULATORS;

  constructor() {
  }

  ngOnInit(): void {

  }

  calculate(solarType: string, accumulatorType: string, powerNeeded: number) {
    console.log(solarType);
    console.log(accumulatorType);
    console.log(powerNeeded);
  }

}

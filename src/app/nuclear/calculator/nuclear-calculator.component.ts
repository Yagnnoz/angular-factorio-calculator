import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nuclear-calculator',
  templateUrl: './nuclear-calculator.component.html',
  styleUrls: ['./nuclear-calculator.component.scss']
})
export class NuclearCalculatorComponent implements OnInit {

  singleReactorEquivalent: number = 0;
  powerOutputInMW: number = 0;
  neededHeatExchangers: number = 0;
  neededPumps: number = 0;
  neededTurbines: number = 0;


  constructor() {
  }

  ngOnInit(): void {
  }

  calculateValues(){
    this.powerOutputInMW = this.singleReactorEquivalent * 40;
    this.neededHeatExchangers = this.powerOutputInMW / 10;
    this.neededPumps = this.neededHeatExchangers / 11.64;

  }


}

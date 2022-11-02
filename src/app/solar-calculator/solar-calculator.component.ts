import {Component, OnInit} from '@angular/core';
import {SOLARPANELS} from "../mock-solarpanels";

@Component({
  selector: 'app-solar-calculator',
  templateUrl: './solar-calculator.component.html',
  styleUrls: ['./solar-calculator.component.css']
})
export class SolarCalculatorComponent implements OnInit {

  panels = SOLARPANELS;

  constructor() {
  }

  ngOnInit(): void {

  }

}

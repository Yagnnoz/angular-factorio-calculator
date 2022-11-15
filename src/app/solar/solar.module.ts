import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SolarCalculatorComponent} from './calculator/solar-calculator.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SolarCalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SolarModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/nuclear.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class NuclearModule { }

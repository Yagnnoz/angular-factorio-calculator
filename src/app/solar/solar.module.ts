import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SolarComponent} from './calculator/solar.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SolarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SolarModule {
}

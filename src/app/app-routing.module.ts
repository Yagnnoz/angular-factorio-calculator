import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SolarCalculatorComponent} from "./solar-calculator/solar-calculator.component";
import {NuclearCalculatorComponent} from "./nuclear-calculator/nuclear-calculator.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {path: 'solar', component: SolarCalculatorComponent},
  {path: 'nuclear', component: NuclearCalculatorComponent},
  {path: 'main', component: MainPageComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

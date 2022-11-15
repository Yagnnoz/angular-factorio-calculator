import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NuclearCalculatorComponent} from "./nuclear-calculator/nuclear-calculator.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {CalculatorComponent} from "./solar/calculator/calculator.component";

const routes: Routes = [
  {path: 'solar', component: CalculatorComponent},
  {path: 'nuclear', component: NuclearCalculatorComponent},
  {path: 'main', component: MainPageComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

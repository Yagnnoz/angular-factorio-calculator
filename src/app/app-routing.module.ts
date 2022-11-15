import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {SolarComponent} from "./solar/calculator/solar.component";
import {NuclearComponent} from "./nuclear/calculator/nuclear.component";

const routes: Routes = [
  {path: 'solar', component: SolarComponent},
  {path: 'nuclear', component: NuclearComponent},
  {path: 'main', component: MainPageComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

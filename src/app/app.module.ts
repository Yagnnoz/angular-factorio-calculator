import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NuclearCalculatorComponent } from './nuclear-calculator/nuclear-calculator.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import {SolarModule} from "./solar/solar.module";

@NgModule({
  declarations: [
    AppComponent,
    NuclearCalculatorComponent,
    MainPageComponent,
    NavigationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SolarModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

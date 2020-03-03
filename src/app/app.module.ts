import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { FinancialComponent } from './components/financial/financial.component';
import { BoxplotComponent } from './components/boxplot/boxplot.component';

@NgModule({
  declarations: [
    AppComponent,
    FinancialComponent,
    BoxplotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

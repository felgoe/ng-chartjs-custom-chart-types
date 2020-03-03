import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxplotComponent } from './components/boxplot/boxplot.component'
import { FinancialComponent } from './components/financial/financial.component'


const routes: Routes = [
  {path: 'financial', component: FinancialComponent},
  {path: 'boxplot', component: BoxplotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

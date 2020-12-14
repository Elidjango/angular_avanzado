import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

// - Components
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ChartsComponent } from './charts/charts.component';

// - Modules
import { SharedModule } from "../shared/shared.module";
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    ProgressbarComponent,
    ChartsComponent
  ],
  exports: [
    LayoutComponent,
    DashboardComponent,
    ProgressbarComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ComponentsModule
  ]
})
export class LayoutModule { }

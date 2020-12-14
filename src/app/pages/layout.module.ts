import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// - Components
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// - M_Shared
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent
  ],
  exports: [
    LayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LayoutModule { }

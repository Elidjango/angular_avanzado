import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';

// - Components
import { IncrementedComponent } from './incremented/incremented.component';
import { ChartsDonutComponent } from './charts-donut/charts-donut.component';

@NgModule({
  declarations: [
    IncrementedComponent,
    ChartsDonutComponent
  ],
  exports: [
    IncrementedComponent,
    ChartsDonutComponent
  ],
  imports: [ CommonModule, FormsModule, ChartsModule ]
})
export class ComponentsModule { }

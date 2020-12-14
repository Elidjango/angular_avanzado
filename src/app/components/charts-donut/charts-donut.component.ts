import { Component, Input, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-charts-donut',
  templateUrl: './charts-donut.component.html',
  styles: [
  ]
})
export class ChartsDonutComponent implements OnInit {
  @Input() title: string = "Not Title";
  @Input() data: any[] = [];
  
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [];

  ngOnInit(): void {
    this.data.forEach(item => {
      this.doughnutChartLabels.push(item.title);
      this.doughnutChartData.push(item.value);
    });
  }
}
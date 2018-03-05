import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highchart',
  template: `<div #chart></div>`,
  styleUrls: ['./highchart.component.scss']
})
export class HighchartComponent implements OnInit, OnChanges {
  @Input() settings: any;
  constructor() { }

  @ViewChild('chart') chart: ElementRef;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.settings) {
      const chartSettings = changes.settings.currentValue;
      Highcharts.chart(this.chart.nativeElement, chartSettings);
    }
  }

}

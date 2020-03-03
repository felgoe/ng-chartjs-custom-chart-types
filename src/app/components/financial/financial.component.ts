import { Component, OnInit, ViewChild } from '@angular/core';
import 'chartjs-chart-financial/dist/chartjs-chart-financial.js';
import * as luxon from 'luxon';
import 'chartjs-adapter-luxon';
import { ChartOptions } from 'chart.js';
import { Color, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {
  barCount = 60;
  initialDateStr = '01 Apr 2017 00:00 Z';

  financialChartData = [
    {
      label: 'CHRT - Chart.js Corporation',
      data: this.getRandomData(this.initialDateStr, this.barCount)
    },
  ];
  financialChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  financialChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  financialChartLegend = true;
  financialChartType = 'candlestick';
  financialChartPlugins = [];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
  }

  randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  randomBar(date: luxon.DateTime, lastClose: number) {
    const open = this.randomNumber(lastClose * 0.95, lastClose * 1.05);
    const close = this.randomNumber(open * 0.95, open * 1.05);
    const high = this.randomNumber(Math.max(open, close), Math.max(open, close) * 1.1);
    const low = this.randomNumber(Math.min(open, close) * 0.9, Math.min(open, close));
    return {
      t: date.valueOf(),
      o: open,
      h: high,
      l: low,
      c: close
    };
  }

  getRandomData(dateStr: string, count: number) {
    let date = luxon.DateTime.fromRFC2822(dateStr);
    const data = [this.randomBar(date, 30)];
    while (data.length < count) {
      date = date.plus({ days: 1 });
      if (date.weekday <= 5) {
        data.push(this.randomBar(date, data[data.length - 1].c));
      }
    }
    return data;
  }

  update() {
    // candlestick vs ohlc
    this.financialChartType = this.financialChartType === 'candlestick' ? 'ohlc' : 'candlestick';
  }
}

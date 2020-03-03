import { Component, OnInit, ViewChild } from '@angular/core';
import 'chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.js';

import { ChartOptions } from 'chart.js';
import { Color, BaseChartDirective } from 'ng2-charts';

function randomValues(count, min, max) {
  const delta = max - min;
  return Array.from({length: count}).map(() => Math.random() * delta + min);
}

@Component({
  selector: 'app-boxplot',
  templateUrl: './boxplot.component.html',
  styleUrls: ['./boxplot.component.css']
})
export class BoxplotComponent implements OnInit {

  title = 'ng-charts-with-custom-boxplot';

  chartType = 'boxplot'

  boxplotData = {
    // define label tree
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 1',
      backgroundColor: 'rgba(255,0,0,0.5)',
      borderColor: 'red',
      borderWidth: 1,
      outlierColor: '#999999',
      padding: 10,
      itemRadius: 0,
      data: [
        randomValues(100, 0, 100),
        randomValues(100, 0, 20),
        randomValues(100, 20, 70),
        randomValues(100, 60, 100),
        randomValues(40, 50, 100),
        randomValues(100, 60, 120),
        randomValues(100, 80, 100)
      ]
    },
    {
      label: 'Dataset 2',
      backgroundColor:  'rgba(0,0,255,0.5)',
      borderColor: 'blue',
      borderWidth: 1,
      outlierColor: '#999999',
      padding: 10,
      itemRadius: 0,
      data: [
        randomValues(100, 60, 100),
        randomValues(100, 0, 100),
        randomValues(100, 0, 20),
        randomValues(100, 20, 70),
        randomValues(40, 60, 120),
        randomValues(100, 20, 100),
        randomValues(100, 80, 100)
      ]
    }
  ]
  };

  options: ChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: "Boxplot with chart.js"
    }
  }

  // IMPORTANT
  // Define one color per dataset, otherwise an error will be thrown on runtime
  // as the ng2-charts function getColors is only defined for preexisting chart types
  // That function will not be called if a color is defined here for every dataset!
  colors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    }, {
      borderColor: 'black',
      backgroundColor: 'rgba(0,255,0,0.3)',
    }
  ];

  plugins = [];

  // Allows us to use custom chart types by wrapping the canvas in a div with the class "chart"
  // Comment: Apparently not needed, leave it in though, in case it might break
  // @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
    
  }
}

import { Component, Input, Output } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [ 
  ]
})
export class DonaComponent  {

  //Los valores que estan aqui para label los datos y color son los predeterminados 
  //si el padre no envia nada
  @Input() title: string = 'Gráfica nueva';

  @Input('labels') doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059'],
      }, 
    ]
  };
  
  // public doughnutChartType: ChartType = 'doughnut';

}

import { Component } from '@angular/core';
// import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  //Valores que se van a enviar al componente hijo dona
  public labels1: string[] = [ 'Ventas', 'Almacen', 'En camino' ];
  public data1 = {
    labels: this.labels1,
    datasets: [
      { data: [ 10, 15, 40 ],
        backgroundColor: [ '#9E120E', '#FF5800', '#FFB414'],
      }, 
    ]
  };

}

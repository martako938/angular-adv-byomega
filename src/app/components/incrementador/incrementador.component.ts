import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  implements OnInit {
 //Implementamos Oninit para usar btnClass y poder condicionar el cambio de color de los botones
  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`
  }

 //El input es el valor que le puede enviar el padre
  @Input('valor') progreso: number = 10;
  @Input() btnClass: string = 'btn-inverse';


  @Output() valorSalida: EventEmitter<number> = new EventEmitter();
//El Output es el valor que le va enviar el hijo al padre en este caso el de las barras

  cambiarValor( valor: number){
    //Para validar que  no sea mas de 100
    if( this.progreso >= 100 && valor >= 0 ){
      this.valorSalida.emit(100); //Para q se envie a la barra
      this.progreso + 100;
      return;
    }
    //Para validar que  no sea menos de 0
    if( this.progreso <= 0 && valor < 0 ){
      this.valorSalida.emit(0);
      this.progreso + 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit( this.progreso );

  }

  //Esta condicion servira para q aunque el valor ingresado por numero exceda el 100 o sea
  //menor a 0 no se pase al valor de la barra

  onChange( nuevoValor: number ){

    if( nuevoValor >= 100 ) {
      this.progreso = 100;
    } else if( nuevoValor <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit( this.progreso );
  }


}

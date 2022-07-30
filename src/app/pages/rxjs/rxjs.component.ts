import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, Subscriber, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs?: Subscription;
  
  constructor() {
    //Para suscribirse y manejar el error
    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log('Subs', valor),
    //   error => console.warn('Error', error),
    //   () => console.info('Obs terminado')
    // );
    this.intervalSubs= this.retornaIntervalo().subscribe( console.log )
   }
  ngOnDestroy(): void {
    this.intervalSubs?.unsubscribe();
  }

   retornaIntervalo(): Observable<number> {
    //Validamos si el valor suscirto es par o impar true o false
    return interval(100)
    .pipe(
              // take(10),
              map( valor => valor + 1 ),
              filter( valor => ( valor % 2 == 0 ) ? true: false ),
              );

   }
   	//Funcion que retorna un observable
   retornaObservable(): Observable<number>{

    let i = -1;
    //Creando a mano un observer
    return new Observable<number>( observer =>{

      const intervalo = setInterval( () => {

        i++;
        observer.next(i);
        //Para borrar intervalo
        if ( i === 4 ) {
          clearInterval( intervalo );
          observer.complete();
        }

        if ( i === 2 ) {
          observer.error('i llego al valor de 4');
        }

      }, 1000)
    });

   }


}

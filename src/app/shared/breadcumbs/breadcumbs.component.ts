import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcumbs',
  templateUrl: './breadcumbs.component.html',
  styles: [
  ]
})
export class BreadcumbsComponent implements OnDestroy {

  public titulo?: string;
  //Para destruir el subscribe
  public tituloSubs$?: Subscription;
  
  constructor( private router: Router, private route: ActivatedRoute ) { 
   this.tituloSubs$ = this.getArgumentosRuta()
                        .subscribe( ({ titulo }) => {
                          this.titulo = titulo;
                          //Titulo de la pagina en la pestana del navegador
                          document.title = `BYOmega - ${ titulo }`;
                        });
  }

  //Para destruir cuando salga con logout
  ngOnDestroy(): void {
    this.tituloSubs$?.unsubscribe();
  }


  //Para leer de pages routing la data de las rutas hijas
  getArgumentosRuta(){
     //Cadena de filtros para obtener la data que esta en routing
     return this.router.events
     .pipe(
       filter<any>( event => event instanceof ActivationEnd ),
       filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
       map( (event: ActivationEnd) => event.snapshot.data ),
     );
  }



}

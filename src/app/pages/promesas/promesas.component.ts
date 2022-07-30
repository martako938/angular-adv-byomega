import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    })

    //Esta estructura se le llama Callback y es una promesa
    // const promesa = new Promise ( ( resolve, reject )=> {

    //   if ( false ){
    //     resolve('Hola Mundo');
    //   }else{
    //     reject('Algo salio mal'); 
    //   }
    // });

    // //El catch sirve para manejar el error
    // promesa
    //   .then( (mensaje)=> {
    //     console.log( mensaje );
    //   })
    //   .catch( error => console.log('Error en mi promesa', error ) )

    // console.log('Fin del Init')
    
  }

  getUsuarios(){
    return new Promise( resolve => {
      //Se concatena un apromesa con otra enseguida
      fetch('https://reqres.in/api/users')
        .then( resp => resp.json () )
        .then( body => resolve( body.data ) );
    });
    
  }

}

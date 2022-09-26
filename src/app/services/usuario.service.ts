import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Esta es la ruta de la nueva interfaz creada
import { RegisterForm } from '../interfaces/register-form.interface';
//Esta es la ruta donde configuramos la ruta para hacer las peticiones
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) { }


  crearUsuario ( formData: RegisterForm ) {
      //console.log('Creando usuario, usando usuario.service');
      //haciendo la peticion POST que regresa un observable
      return this.http.post(`${ base_url }/usuarios`, formData );

  } 

}

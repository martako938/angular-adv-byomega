import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Para mandar alerta al usuario
import Swal from 'sweetalert2'
//Servicio creado para comunicarnos con la BD
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {
  //Formulario posteado
  public formSubmitted = false;

  //Formulario de registro
  public registerForm = this.fb.group({
    nombre: [ 'Raul', Validators.required ],
    email: [ 'test100@gmail.com', [Validators.required, Validators.email] ],
    password: [ '123456', Validators.required ],
    password2: [ '123456', Validators.required ],
    terminos: [ true, Validators.required ]
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

  //inyectamos el servicio usuario
  constructor( private fb: FormBuilder,
               private usuarioService: UsuarioService) { }

  crearUsuario(){
    //Cuando se crea cambia a true
    this.formSubmitted = true;
    console.log( this.registerForm.value );

    if ( this.registerForm.invalid ) {
      return;
    }

    //Si es valido realizar el posteo
    // this.usuarioService.crearUsuario( this.registerForm.value )
    //     .subscribe( resp=> {
    //       console.log('Usuario creado');
    //       console.log(resp);
    //     }, (err) => console.warn( err ));

    //Asi sugiere hacer la peticion ahora
    this.usuarioService.crearUsuario( this.registerForm.value )
    .subscribe({
      next: (resp) => { console.log( 'El Usuario fue creado' ), 
                        console.log( resp ) },
      error: (err) => { 
        //Si sucede un error
        Swal.fire('Ocurrio un error', err.error.msg, 'error')
       }
    });    

  }

  campoNoValido( campo: string ): boolean {
    //Si el campo del formulario es valido y el formulario ha sido posteado
    if( this.registerForm.get(campo)?.invalid && this.formSubmitted ){
      return true
    } else{
      return false;
    }
  }

  contrasenasNoValidas(){
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if ( (pass1 !== pass2) && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos(){
    //Si esta en falso y fue posteado
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  passwordsIguales( pass1Name: string ,pass2Name:string ){
    return ( formGroup:FormGroup ) => {

      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if( pass1Control?.value === pass2Control?.value ){
        pass2Control?.setErrors(null)
      } else {
        pass2Control?.setErrors({ noEsIgual: true })
      }

    }
  }

}

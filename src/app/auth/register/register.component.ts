import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    password: [ '', Validators.required ],
    password2: [ '', Validators.required ],
    terminos: [ false, Validators.required ]
  });

  constructor( private fb: FormBuilder ) { }

  crearUsuario(){
    //Cuando se crea cambia a true
    this.formSubmitted = true;
    console.log( this.registerForm.value )

    if ( this.registerForm.valid ) {
      console.log('posteando formulario');
      
    } else {
      console.log('Formulario no es correcto...');
      
    }
  }

  campoNoValido( campo: string ): boolean {
    //Si el campo del formulario es valido y el formulario ha sido posteado
    if( this.registerForm.get(campo)?.invalid && this.formSubmitted ){
      return true
    } else{
      return false;
    }
  }

  aceptaTerminos(){
    //Si esta en falso y fue posteado
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

}

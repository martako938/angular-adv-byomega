import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 
    //Se hace como en account-settings para asignar lo que hay en local storage cuando carga la pagina
    const url = localStorage.getItem('theme')  || './assets/css/colors/omega.css';
    this.linkTheme?.setAttribute('href', url);
  }

  changeTheme( theme: string ){
    // console.log(theme);
    //Para armar el url del cambio de tema
    const url = `./assets/css/colors/${ theme }.css`;
    //Ver en consola el url completo construido
    //console.log(url)
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    //Despues de hacer seleccion se llama checkCurrentTheme
    this.checkCurrentTheme();
  }
  //Para mover el check en la seleccion del tema
  checkCurrentTheme(){  

    const links = document.querySelectorAll('.selector');

    links.forEach ( elem => {
      //Remueve working, el puntero, si es que esta
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme')
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`
      const currentTheme = this.linkTheme?.getAttribute('href');
      //Compara que uno se exactamente igual al otro de ser asi agrega la clase working
      if( btnThemeUrl === currentTheme ){
        elem.classList.add('working');
      }
    })
  }

}

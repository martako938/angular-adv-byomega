import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions(): any;
  


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  //Se inyecta el servicio Settings
  constructor( private settingsService: SettingsService) { }
  //Version y año en el footer
  year = new Date().getFullYear();
  versionOmega: string = 'V1.8.4.0';

  ngOnInit(): void {
    customInitFunctions();
  }

}

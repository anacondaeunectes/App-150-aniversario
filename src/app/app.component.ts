import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Saludos', url: '/folder/Saludos', icon: 'hand-right' },
    { title: 'Visitas', url: '/folder/Visitas', icon: 'videocam' },
    { title: 'Programa actos', url: '/folder/Archived', icon: 'analytics' },
    // { title: 'Logo', url: '/folder/Trash', icon: 'bonfire' },
    // { title: 'Historia', url: '/folder/Spam', icon: 'earth' },
    // { title: 'Oración', url: '/folder/Oración', icon: 'musical-note' },
    // { title: 'Himno', url: '/folder/Himno', icon: 'musical-notes' },
    // { title: 'Materiales', url: '/folder/Materiales', icon: 'attach' },
    // { title: 'Gracias', url: '/folder/Gracias', icon: 'accessibility' }
  ];
  
  constructor() {}
}

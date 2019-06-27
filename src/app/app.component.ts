import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat = 8.4334766;
  lng = -82.3799246;
  title = 'PSquare';
  lugares: any = [
    { activo: true, nombre: 'Florería la Gardenia' },
    { activo: true, nombre: 'Donas la pasadita' },
    { activo: true, nombre: 'Veterinaria huellitas felices' },
    { activo: false, nombre: 'Sushi Suhiroll' },
    { activo: true, nombre: 'Hotel la Gracia' },
    { activo: false, nombre: 'Zapatería el Clavo' }
  ];
  constructor() {
  }
}

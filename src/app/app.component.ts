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
    { plan: 'pagado', cercania: 1, distancia: 1, activo: true, nombre: 'Florería la Gardenia' },
    { plan: 'gratuito', cercania: 1, distancia: 1.8, activo: true, nombre: 'Donas la pasadita' },
    { plan: 'gratuito', cercania: 2, distancia: 5, activo: true, nombre: 'Veterinaria huellitas felices' },
    { plan: 'gratuito', cercania: 3, distancia: 10, activo: false, nombre: 'Sushi Suhiroll' },
    { plan: 'pagado', cercania: 3, distancia: 35, activo: true, nombre: 'Hotel la Gracia' },
    { plan: 'gratuito', cercania: 3, distancia: 120, activo: false, nombre: 'Zapatería el Clavo' }
  ];
  constructor() {
  }
}

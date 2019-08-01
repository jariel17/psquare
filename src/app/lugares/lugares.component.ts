import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  lat = 8.4334766;
  lng = -82.3799246;
  title = 'PSquare';
  lugares: any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, activo: true, nombre: 'Florería la Gardenia' },
    {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, activo: true, nombre: 'Donas la pasadita' },
    {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, activo: true, nombre: 'Veterinaria huellitas felices' },
    {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, activo: false, nombre: 'Sushi Suhiroll' },
    {id: 5, plan: 'pagado', cercania: 3, distancia: 35, activo: true, nombre: 'Hotel la Gracia' },
    {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, activo: false, nombre: 'Zapatería el Clavo' }
  ];
  constructor() {
  }
}

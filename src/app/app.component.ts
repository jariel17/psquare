import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PSquare';
  lugares: any = [
  {nombre: 'Florería la Gardenia'},
  {nombre: 'Donas la pasadita'},
  {nombre: 'Veterinaria huellitas felices'}
  ];

  constructor() {
  }
}

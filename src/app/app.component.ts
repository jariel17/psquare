import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PSquare';
  a = 10;
  b = 15;
  listo = false;
  nombre = '';
  apellido = '';
  constructor() {
    setTimeout(() => {
      this.listo = true;
    }, 3000);
  }
hacerAlgo() {
  alert('Haciendo algo!');
}
}

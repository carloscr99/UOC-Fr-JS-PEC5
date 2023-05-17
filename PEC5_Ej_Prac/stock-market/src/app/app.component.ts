import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock-market';

  public opcionSeleccionada = '';

  cambiarContenido(opcion: string) {
    // Aquí puedes hacer lo necesario con la opción seleccionada
    console.log('Opción seleccionada:', opcion);

    this.opcionSeleccionada = opcion;
    // ...
  }

}

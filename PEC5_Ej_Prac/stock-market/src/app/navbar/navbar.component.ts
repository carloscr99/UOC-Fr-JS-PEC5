import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() opcionSeleccionada = new EventEmitter<string>();

  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada.emit(opcion);
  }
  

}

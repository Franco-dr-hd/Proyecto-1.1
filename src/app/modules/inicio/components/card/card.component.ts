import { Component } from '@angular/core';

// Importamos la interfaz para deporte
import { Deporte } from 'src/app/models/deporte';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // propiedad publica -> tipo array
  public info: Deporte[];

  // inicializar la propiedad info
  constructor() {
    this.info = [
      {
        id: "",
        nombre: "tenis de mesa",
        tipo: "deporte",
        imagen: "",
        alt: "imagen del deporte tenis de mesa"
      }
    ]
  }
}

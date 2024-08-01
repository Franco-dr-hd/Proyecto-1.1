import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CroudService } from '../../services/croud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
// Crear coleccion de productos del tipo producto -> lo definimos como un array
coleccionProductos: Producto[] = [];
//Definimos formulario para los productos
/** Atributos alfanumericos (string) se inicializan con comillas simples
 * Atributos númericos (number) se inicializan con cero ('0')
 */

producto = new FormGroup({
  nombre: new FormControl('', Validators.required),
  precio: new FormControl(0, Validators.required),
  descripcion: new FormControl('', Validators.required),
  categorias: new FormControl('', Validators.required),
  imagen: new FormControl('', Validators.required),
  alt: new FormControl('', Validators.required),
})

constructor(public servicioCroud: CroudService){}
}

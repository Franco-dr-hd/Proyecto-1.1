import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CroudService {

//Definimos colección para los productos de la web del tipo producto 
private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    //Referenciamos coleccíon productos y será subida como "producto" a Firebase
    this.productosCollection = database.collection('producto');
   }
   // CREAR productos
   crearProducto(producto: Producto){
    return new Promise(async (resolve, reject)=>{
      try{


       // Creamos número identificativo para el producto en la base de datos
        const idProducto = this.database.createId();

       // Asignamos ID creado al atributo idProducto de la interfaz "Producto"
      producto.idProducto = idProducto;

      const resultado = await this.productosCollection.doc(idProducto).set(producto);

      resolve (resultado);

      }catch(error){
        reject(error);
      }
    })
   }
   // OBTENER productos
   //EDITAR productos
   //ELIMINAR Productos
}

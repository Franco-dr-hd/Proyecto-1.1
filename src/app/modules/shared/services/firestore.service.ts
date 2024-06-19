import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  /** 
   * Definimos una coleccion de usuarios PRIVADA
   * Va a ser una coleccion de Firestore
   * Respetara la estructura de datos de la interfaz Usuario 
  */
private usuarioCollection: AngularFirestoreCollection<Usuario>


  constructor(private database: AngularFirestore) {
    this.usuarioCollection = this.database.collection<Usuario>('usuarios');
   }

   agregarUsuario(Usuario: Usuario, id: string) {

    return new Promise(async (resolve,reject) => {
      try{
        Usuario.uid = id;

        /**
         * const resultado = coleccion de usuaurios, envia como documento el UID
         * y setea la informacion que ingresemos en el REGISTRO
         */
        const resultado = await this.usuarioCollection.doc(id).set(Usuario);
        resolve(resultado)
        //bloque CATCH encapsula una falla y la vuelve un error
      }catch(error){
        reject (error);
      }
      })
    }
  }
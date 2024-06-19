import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }


//Funcion para tomar UID
async obtenerUid(){


  //Nos va a generar una promesa, y la constante la va a capturar

  const user = await this.auth.currentUser;
  
if(user == null){
  return null
}
else{
  return user.uid;
}
}
/*Si el usuario no respeta la estructura de la interfaz /
Si tuvo problemas para el registro -> ej.: mal internet
*/


}
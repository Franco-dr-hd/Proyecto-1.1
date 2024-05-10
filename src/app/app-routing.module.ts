import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  // Ruta comun -> componente
  {
    path: "", component: InicioComponent
  },
  // Carga PEREZOSA -> ruta que te lleva a un módulo específico 
  {
    path: "", loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },

  {
    path: "", loadChildren:() => import('./modules/producto/producto.module').then(m => m.ProductoModule)
  }
  // loadchildren: indica que habrá una ruta hija
  // ()=> import: funcion flecha que importa desde la ruta
  // .then: Funcion asíncronica del tipo PROMESA 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

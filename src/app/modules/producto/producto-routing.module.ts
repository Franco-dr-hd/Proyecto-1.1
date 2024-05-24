import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { GomasComponent } from './gomas/gomas.component';
import { RemerasComponent } from './remeras/remeras.component';

const routes: Routes = [
  {
    path:"accesorios",component:AccesoriosComponent
  },

  {
    path:"gomas",component:GomasComponent
  },

  {
    path:"maderas",component:GomasComponent
  },

  {
    path:"remeras",component:RemerasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ProductoRoutingModule { }

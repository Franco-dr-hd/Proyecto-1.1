import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { MaderasComponent } from './maderas/maderas.component';
import { GomasComponent } from './gomas/gomas.component';
import { RemerasComponent } from './remeras/remeras.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';


@NgModule({
  declarations: [
    MaderasComponent,
    GomasComponent,
    RemerasComponent,
    AccesoriosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
exports:[
  
  MaderasComponent,
  GomasComponent,
  RemerasComponent,
  AccesoriosComponent
]


})
export class ProductoModule { }

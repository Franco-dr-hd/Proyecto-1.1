import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

// Vista de Pagina
import { InicioComponent } from './pages/inicio/inicio.component';

// Componentes locales
import { CardComponent } from './components/card/card.component';

// Componentes de material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule

  ]
})
export class InicioModule { }

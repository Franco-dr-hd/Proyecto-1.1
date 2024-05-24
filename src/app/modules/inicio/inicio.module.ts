import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Vista de Pagina
import { InicioComponent } from './pages/inicio/inicio.component';

// Componentes locales
import { CardComponent } from './components/card/card.component';

// Componentes de material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,

  ],
  exports:[
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }

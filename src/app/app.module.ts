import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductoComponent } from './producto/pages/producto/producto.component';
import { MaderasComponent } from './producto/pages/maderas/maderas.component';
import { GomasComponent } from './producto/pages/gomas/gomas.component';
import { RemerasComponent } from './producto/pages/remeras/remeras.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    MaderasComponent,
    GomasComponent,
    RemerasComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

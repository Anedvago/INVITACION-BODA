import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvitacionComponent } from './pages/invitacion/invitacion.component';
import { LogoComponent } from './components/logo/logo.component';
import { EspaciadorComponent } from './components/espaciador/espaciador.component';
import { FotoVersiculoComponent } from './components/foto-versiculo/foto-versiculo.component';
import { NombreFechaComponent } from './components/nombre-fecha/nombre-fecha.component';
import { ConsejosComponent } from './components/consejos/consejos.component';

@NgModule({
  declarations: [
    AppComponent,
    InvitacionComponent,
    LogoComponent,
    EspaciadorComponent,
    FotoVersiculoComponent,
    NombreFechaComponent,
    ConsejosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

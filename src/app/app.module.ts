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
import { LayoutComponent } from './pages/layout/layout.component';
import { RecepcionComponent } from './components/recepcion/recepcion.component';
import { ButtonLocationComponent } from './components/button-location/button-location.component';
/* import { initializeApp,provideFirebaseApp } from '@angular/fire/app'; */
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { InvitadosComponent } from './pages/invitados/invitados.component';
import { TablaInvitadosComponent } from './components/tabla-invitados/tabla-invitados.component';
import { FormularioInvitadosComponent } from './components/formulario-invitados/formulario-invitados.component';
import { FormsModule } from '@angular/forms';
/* import { provideFirestore,getFirestore } from '@angular/fire/firestore'; */

@NgModule({
  declarations: [
    AppComponent,
    InvitacionComponent,
    LogoComponent,
    EspaciadorComponent,
    FotoVersiculoComponent,
    NombreFechaComponent,
    ConsejosComponent,
    LayoutComponent,
    RecepcionComponent,
    ButtonLocationComponent,
    InvitadosComponent,
    TablaInvitadosComponent,
    FormularioInvitadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-formulario-invitados',
  templateUrl: './formulario-invitados.component.html',
  styleUrls: ['./formulario-invitados.component.css']
})
export class FormularioInvitadosComponent {
  nombre = "";
  tipo = "";

  constructor(private firestoreService: FirebaseService) { }
  insertarInvitado() {
    this.firestoreService.addItem({ nombre: this.nombre, tipo: this.tipo });
    this.nombre = "";
    this.tipo = ""
  }
}

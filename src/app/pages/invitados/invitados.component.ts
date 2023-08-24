import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-invitados',
  templateUrl: './invitados.component.html',
  styleUrls: ['./invitados.component.css']
})
export class InvitadosComponent {
  public invitados?: any[] = [];
  public invitadosRecepcion?: any[] = [];
  public invitadosConsejos?: any[] = [];
  public totalInvitadosConsejos?: number = 0;
  public totalInvitadosRecepcion?: number = 0;
  public totalInvitadosConsejosConfirmados1?: number = 0;
  public totalInvitadosRecepcionConfirmados1?: number = 0;
  public totalInvitadosConsejosConfirmados2?: number = 0;
  public totalInvitadosRecepcionConfirmados2?: number = 0;

  constructor(private firestoreService: FirebaseService) {
    this.obtenerInvitados()
  }

  obtenerInvitados() {
    this.firestoreService.getItems().subscribe((data) => {
      this.invitados = data;
      console.log(this.invitados);
      this.clasificarInvitados();
    })
  }

  clasificarInvitados() {
    this.invitadosRecepcion = [];
    this.invitadosConsejos = [];
    for (const invitado of this.invitados!) {
      if (invitado.tipo === "RECEPCIÓN") {
        this.invitadosRecepcion!.push(invitado); // Agrega al array "arrayRec" si el tipo es "rec"
      } else if (invitado.tipo === "CONSEJOS") {
        this.invitadosConsejos!.push(invitado); // Agrega al array "arrayCons" si el tipo es "cons"
      }
    }
    this.calcularTotales();
  }

  calcularTotales() {
    this.totalInvitadosConsejos = 0;
    this.totalInvitadosRecepcion = 0;
    this.totalInvitadosConsejosConfirmados1 = 0;
    this.totalInvitadosRecepcionConfirmados1 = 0;
    this.totalInvitadosConsejosConfirmados2 = 0;
    this.totalInvitadosRecepcionConfirmados2 = 0;

    this.totalInvitadosConsejos = this.invitadosConsejos?.length;
    this.totalInvitadosRecepcion = this.invitadosRecepcion?.length;
    for (const invitado of this.invitadosConsejos!) {
      if (invitado.fecha_confirmacion_1 != undefined && invitado.tipo === "CONSEJOS") {
        this.totalInvitadosConsejosConfirmados1 ++;
      } 
      if (invitado.fecha_confirmacion_2 != undefined && invitado.tipo === "CONSEJOS") {
        this.totalInvitadosConsejosConfirmados2 ++;
      }
    }

    for (const invitado of this.invitadosRecepcion!) {
      if (invitado.fecha_confirmacion_1 != undefined && invitado.tipo === "RECEPCIÓN") {
        this.totalInvitadosRecepcionConfirmados1 ++;
      } 
      if (invitado.fecha_confirmacion_2 != undefined && invitado.tipo === "RECEPCIÓN") {
        this.totalInvitadosRecepcionConfirmados2 ++;
      }
    }
  }
}

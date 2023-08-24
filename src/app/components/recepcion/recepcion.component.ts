import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Location } from '@angular/common';
import Swal from "sweetalert2";

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent {
  public idInvitado?: string;

  constructor(private location: Location, private firestoreService: FirebaseService) {
    const currentUrl = this.location.path();
    const data = currentUrl.split("/")
    this.idInvitado = (data[data.length - 1]);
  }

  confirmarAsistencia() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const fechaActual = `${year}-${month}-${day}`;


    if (fechaActual < "2023-11-01") {
      this.firestoreService.updateItem(this.idInvitado!, { fecha_confirmacion_1: fechaActual });

      Swal.fire({
        title: '<h2 style="font-size: 20px; font-family:Roboto;">¡Gracias por confirmar tu asistencia!</h2>',
        timer: 2000,
        confirmButtonColor:"#475B4F"
      });

    } else {
      this.firestoreService.updateItem(this.idInvitado!, { fecha_confirmacion_2: fechaActual });
      Swal.fire({
        title: '<h2 style="font-size: 20px; font-family:Roboto;">¡Una vez más gracias por confirmar tu asistencia!</h2>',
        timer: 2000,
        confirmButtonColor:"#475B4F"
      });
    }

  }
}

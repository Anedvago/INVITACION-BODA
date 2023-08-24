import { Component, Input} from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-tabla-invitados',
  templateUrl: './tabla-invitados.component.html',
  styleUrls: ['./tabla-invitados.component.css']
})
export class TablaInvitadosComponent{
@Input()
public invitados:any[] = [];

  /* public invitados?: any[] = [];
  public invitadosRecepcion?: any[] = [];
  public invitadosConsejos?: any[] = [];

  constructor(private firestoreService: FirebaseService) {
    this.obtenerInvitados()
  }

  obtenerInvitados() {
    this.firestoreService.getItems().subscribe((data) => {
      this.invitados = data;
      console.log(data);
      console.log(data.fecha_confirmacion_1);
      
    })
  }
  clasificarInvitados(){
    for (const invitado of this.invitados!) {
      if (invitado.tipo === "RECEPCION") {
        this.invitadosRecepcion!.push(invitado); // Agrega al array "arrayRec" si el tipo es "rec"
      } else if (invitado.tipo === "CONSEJOS") {
        this.invitadosConsejos!.push(invitado); // Agrega al array "arrayCons" si el tipo es "cons"
      }
    }
  } */
}

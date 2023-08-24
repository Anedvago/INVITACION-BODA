import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent {


  public coder: any = {
    "4": "A",
    "6": "B",
    "C": "C",
    "D": "D",
    "3": "E",
    "F": "F",
    "9": "G",
    "H": "H",
    "1": "I",
    "7": "J",
    "K": "K",
    "L": "L",
    "M": "M",
    "N": "N",
    "0": "O",
    "P": "P",
    "Q": "Q",
    "R": "R",
    "5": "S",
    "T": "T",
    "U": "U",
    "V": "V",
    "W": "W",
    "X": "X",
    "Y": "Y",
    "Z": "Z"
  };

  public type?: number;
  public name?: string;
  public idInvitado?: string;
  constructor(private location: Location, private firestoreService: FirebaseService) {
    /*  this.firestoreService.getItems().subscribe((data) => {
       console.log(data);
 
     }); */


  }
  ngOnInit() {
    const currentUrl = this.location.path();
    const data = currentUrl.split("/")
    this.type = parseInt(data[(data.length) - 2])
   /*  const names = (data[data.length - 2]).split("-")
    this.name = this.replaceWithCoder(this.reverseString(names[0])) + " " + this.replaceWithCoder(this.reverseString(names[1])); */
    this.idInvitado = (data[data.length - 1]);


    this.firestoreService.getItem(this.idInvitado!).subscribe((data) => {
      console.log(data);
      this.name = data.nombre;
    });
  }
  public reverseString(inputString: string): string {
    return inputString.split("").reverse().join("");
  }

  public replaceWithCoder(inputString: string): string {
    return inputString.split("").map(char => this.coder[char] || char).join("");
  }

}

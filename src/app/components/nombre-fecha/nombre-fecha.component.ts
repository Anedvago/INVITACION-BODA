import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nombre-fecha',
  templateUrl: './nombre-fecha.component.html',
  styleUrls: ['./nombre-fecha.component.css']
})
export class NombreFechaComponent {
  @Input()
  public name: string = "";
}

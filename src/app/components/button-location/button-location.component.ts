import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-location',
  templateUrl: './button-location.component.html',
  styleUrls: ['./button-location.component.css']
})
export class ButtonLocationComponent {
  @Input()
  public location:string = "";
  @Input()
  public time:string = "";
  @Input()
  public locationName:string = "";
  public abrirDireccion() {
    window.open(this.location)
  }
}

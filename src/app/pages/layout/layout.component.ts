import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  @Input()
  public nameImg1?:string;
  @Input()
  public nameImg2?:string;
  @Input()
  public crop1:string = "";
  @Input()
  public crop2:string = "";
}

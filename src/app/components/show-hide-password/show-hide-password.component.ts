import { Component,ContentChild,Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-show-hide-password',
  templateUrl: './show-hide-password.component.html',
  styleUrls: ['./show-hide-password.component.css']
})
export class ShowHidePasswordComponent  {
  showPassword = false;
  constructor() { }
 
  @Input() input="";
  
 
toggleShow() {
  this.showPassword = !this.showPassword;
  this.input = this.showPassword ? 'text' : 'password';
}
}

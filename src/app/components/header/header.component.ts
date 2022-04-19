import { NgSwitch } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';

import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { SessionStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  value: string = 'login';
  s_tatus: any = 0;
  SearchForm: FormGroup;
  search: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.value);
  }
  @Input()
  onSession() {
    var session1 = sessionStorage.getItem('email');
    console.log(this.s_tatus);
  }
  showHeaderB() {
    console.log(this.s_tatus);
    if (this.s_tatus == 0) {
      this.value = `<a  routerLink= "/login" routerLinkActive="active"> LOGIN</a> 
        <router-outlet></router-outlet>`;

      return false;
    } else {
      this.value = '<app-dropdown> </app-dropdown>';
      console.log(this.value);
      return true;
    }
  }
}

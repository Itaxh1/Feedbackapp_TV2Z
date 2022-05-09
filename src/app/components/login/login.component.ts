import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() input = '';
  showPassword = false;
  loginForm: FormGroup;
  msg: string = null;
  loading = false;
  flag: any = 0;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{6,}$'
          ),
        ],
      ],
    });
  }

  loginUser() {
    this.flag = 1;
    sessionStorage.setItem('Status', this.flag);
    this.router.navigate(['/feedback']);
  }
  
}

function key(key: any, arg1: string) {
  throw new Error('Function not implemented.');
}

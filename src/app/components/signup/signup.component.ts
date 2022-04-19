import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  ValidationErrors,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { __values } from 'tslib';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private route: ActivatedRoute, public router: Router) {}
  signupForm: FormGroup;
  confirm_password: any = 'null';
  em: string = 'null';
  pas: string = 'null';
  formdata = new FormData();

  ngOnInit() {
    var object = {};
    this.signupForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{6,}$'
        ),
      ]),
      confirm_password: new FormControl(null, [Validators.required]),
    });
  }
  loginUser() {
    validator: this.validatePasswords;
    //console.log(this.signupForm.status);
    console.log(this.signupForm.value);

    let user: any;
    const formulario = new FormData();

    const formData = this.signupForm.value;

    Object.keys(formData).forEach((key) => {
      sessionStorage.setItem(key, formData[key]);
    });

    //user = JSON.parse(JSON.stringify(this.formdata.getAll));
    console.log(formData);
    this.router.navigate(['/login']);
  }

  validatePasswords(formGroup: FormGroup): any {
    const password = formGroup.controls['password'];
    const confirmPassword = formGroup.controls['confirmPassword'];

    // don't validate
    if (password.pristine || confirmPassword.pristine) {
      return null;
    }

    formGroup.markAsTouched();

    if (password.value === confirmPassword.value) {
      return null;
    }

    return confirmPassword.setErrors({
      notEqual: true,
    });
  }
}
function key(key: any, arg1: string) {
  throw new Error('Function not implemented.');
}

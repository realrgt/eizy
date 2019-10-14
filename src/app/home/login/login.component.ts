import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  hide = true;
  private formSubmitAttempt: boolean;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = fb.group({
      id: [null],
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {}

  login() {
    if (this.form.valid) {
      this.router.navigate(['employees']);
    }
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true;
  }
}

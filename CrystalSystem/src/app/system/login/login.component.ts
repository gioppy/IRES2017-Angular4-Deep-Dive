import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthFakeService } from '../../shared/auth-fake.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authFakeService: AuthFakeService, private router: Router) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  loginUser() {
    /*if (this.loginForm.valid) {
      console.log('USER LOGGED IN');
    } else {
      console.log('ALL INPUT FIELD ARE REQUIRED');
    }*/
    this.authFakeService.login();
    this.router.navigate(['/customers']);
  }

}

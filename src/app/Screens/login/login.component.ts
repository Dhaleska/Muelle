import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  errorMessage: string = '';

  constructor(private router: Router) { }

  login(username: string, password: string) {

    // Usuario y contraseña 
    const validUsername = 'admin';
    const validPassword = '12345';

    if (username === validUsername && password === validPassword) {
      this.router.navigate(['/principal']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}

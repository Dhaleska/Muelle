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

  login(event: Event, username: string, password: string) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    const validUsername = 'admin';
    const validPassword = '12345';

    if (username === validUsername && password === validPassword) {
      console.log('Login successful, redirecting to /principal');
      this.router.navigate(['/principal']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
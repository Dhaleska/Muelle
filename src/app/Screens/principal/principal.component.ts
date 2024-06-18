import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(private router: Router) { }

  openGeneral() {
    this.router.navigate(['/general']);
  }

  openMenu() {
    this.router.navigate(['/menu']);
  }

  openOrdenes() {
    this.router.navigate(['/ordenes']);
  }

  openDashboard() {
    this.router.navigate(['/dashboard']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  constructor(private router: Router) {}

  navigateToPrincipal() {
    this.router.navigate(['/principal']);
  }
}

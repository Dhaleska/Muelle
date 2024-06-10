import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  openMenu() {
    window.open('/menu', '_blank');
  }

  openReporte() {
    window.open('/reporte', '_blank');
  }

  openFactura() {
    window.open('/factura', '_blank');
  }

  openStock() {
    window.open('/stock', '_blank');
  }

}

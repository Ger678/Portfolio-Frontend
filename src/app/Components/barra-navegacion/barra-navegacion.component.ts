import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../accesorios/login/login.component';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css'],
})
export class BarraNavegacionComponent implements OnInit {
  constructor(public activeModal: NgbModal) {}

  ngOnInit(): void {}

  openModal(): void {
    this.activeModal.open(LoginComponent);
  }
}

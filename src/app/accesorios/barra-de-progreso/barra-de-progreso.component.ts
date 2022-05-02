import { Component, OnInit, Input, } from '@angular/core';
import { HabilidadesComponent } from 'src/app/habilidades/habilidades.component';

@Component({
  selector: 'app-barra-de-progreso',
  templateUrl: './barra-de-progreso.component.html',
  styleUrls: ['./barra-de-progreso.component.css']
})
export class BarraDeProgresoComponent implements OnInit {

  @Input() porcentaje : any = " ";
  @Input() porcentajePath : any = " ";
  @Input() value : number = 50; 

  constructor() {   
  
}

  ngOnInit(): void {
  }

  
}
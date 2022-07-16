import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Portada } from '../models/portada';
import { PortadaService } from '../service/portada.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BotonesService } from '../service/botones.service';
import { BotonEditComponent } from '../accesorios/boton-edit/boton-edit.component';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css'],
  animations: [
    trigger('inOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(500)
      ]),
      transition(':leave', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class PortadaComponent implements OnInit {

  mostrar!: boolean;
  
  public ports: Portada [] = [];
  portadaId!: number;
  nombre: string = "portada";


  dato: any ="sin datos";
  
 
  constructor(
    private portService: PortadaService,
    private btnService: BotonesService,
    private btn: BotonEditComponent
  ) { }

  ngOnInit(): void {
    this.lista();
  }

  lista(): void {
    this.portService.lista().subscribe(
     data => {
       this.ports = data;
     },
     error => {
       console.log(error);
     }
   );
  }
  
  mostrarBtn(id: number){
    this.mostrar = true;
    this.portadaId = id;
    console.log("works")
  }

  cambiarMostrar(e: any){
    this.mostrar = e;
    console.log(e);
  }

  borrarPort(portadaId: number, nombre: string){    
    if( this.btn.onBorrar() == (this.btnService.url + nombre + "/borrar/" + portadaId)){
     /*  return this.btnService.delete(portadaId, nombre).subscribe(); */
     console.log(this.btnService.url + nombre + "/borrar/" + portadaId)
    };    
  }

}

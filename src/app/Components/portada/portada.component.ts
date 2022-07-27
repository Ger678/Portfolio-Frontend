import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Portada } from '../../models/portada';
import { PortadaService } from '../../service/portada.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BotonesService } from '../../service/botones.service';
import { BotonEditComponent } from '../../accesorios/boton-edit/boton-edit.component';
import { Router } from '@angular/router';

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
  public editPort!: Portada;
  portadaId: number = 1;
  titulo: string = "portada";
  nombre!: string;
  subtitulo!: string;
  perfilUrl!: string;
  portadaUrl!: string;
  contenido!: string;
  btn!: BotonEditComponent;
  editar!: boolean;
  nuevo!: boolean;

  object: Portada = new Portada(this.portadaId, this.nombre, this.subtitulo, this.perfilUrl,
     this.portadaUrl, this.contenido);
 
  constructor(
    private portService: PortadaService,
    private btnService: BotonesService,
    private router: Router,

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

  
  mostrarBtn(id: number):any{
    this.mostrar = true;
    this.btnService.sendBtn(this.mostrar);
    this.btnService.sendId(id);
    this.btnService.sendNombre(this.titulo);
    this.btnService.sendObject(this.object);
  }

  cambiarMostrar(e: any){
    this.mostrar = e;
    console.log(e);
  }

  nuevaPortada(){
    this.btnService.recibeAgregar().subscribe((d)=>{
      this.nuevo = d;
    });
    this.lista();
  }

  cancelar(){
    this.editar = false;
    this.nuevo = false;
  }

  mostrarEditarOrNuevo(){
    this.nuevoModel();
    this.editarModel();
  }

  nuevoModel(){
    this.btnService.mostrarNuevo(this.portadaId, this.titulo).subscribe((data) => {
      this.nuevo = data;
    });
  }

  editarModel(){
    this.btnService.mostrarEditar(this.portadaId, this.titulo).subscribe((d)=>{
      this.editar = d;
      console.log("portada works");
    });
  }

  update(form: any){
    this.portService.editar(this.portadaId, form).subscribe();
    this.router.navigate(['/info']);
  }

  crear(form: any): void{    
    this.portService.save(form).subscribe();
    this.router.navigate(['/info']);
  }
}

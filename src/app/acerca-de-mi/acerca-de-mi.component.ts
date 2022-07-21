import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BotonEditComponent } from '../accesorios/boton-edit/boton-edit.component';
import { Acerca } from '../models/acerca';
import { AcercaService } from '../service/acerca.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BotonesService } from '../service/botones.service';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css'],
  /*animations: [
    trigger('inOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)',
        opacity: 1 }),
        animate(700)
      ]),
      transition(':leave', [
        animate(100, style({ transform: 'translateX(100%)',
        opacity: 0 }))
      ])
    ])
  ]*/
})
export class AcercaDeMiComponent implements OnInit {

  showDiv : boolean = false;
  mostrarVar = true;

  public acercas : Acerca [] = [];
  public editAcerca!: Acerca;
  public borrarAcerca!: Acerca;
  id :number = 2;
  titulo!: string;
  contenido!: string;
  icono!: string;
  object: Acerca =new Acerca(this.id, this.titulo, this.contenido, this.icono) ;
  mostrar!: boolean;
  tittle: string = "acerca";
  mostrarDiv!: boolean ;
  nuevo!: boolean;

  constructor(
    private acercaService: AcercaService,
    private btnService: BotonesService,
  ) { }

  ngOnInit(): void {
    this.getAcercas();
   }

  mostrarBtn(id: number):any{
    this.mostrar = true;
    this.btnService.sendBtn(this.mostrar);
    this.btnService.sendId(id);
    this.btnService.sendNombre(this.tittle);
    this.btnService.sendObject(this.object);
  }

  getAcercas(): void {
    this.acercaService.lista().subscribe(
     data => {
       this.acercas = data;
     },
     error => {
       console.log(error);
     }
   );
  }
  
  // estos 3 metodos los utilizo para abrir los divs de "edidar" y "agregar"

  //este metodo lo vinculo con el template
  mostrarEditarOrNuevo(){
    this.nuevoModel();
    this.editarModel();
  }

  //metodo para abrir el div "Agregar nuevo"
  nuevoModel(){
    this.btnService.mostrarNuevo(this.id, this.tittle).subscribe((data) => {
      this.nuevo = data;
    });
  }

  //metodo para abrir el div "Editar"
  editarModel(){
      this.btnService.mostrarEditar(this.id, this.tittle).subscribe((d)=>{
      this.mostrarDiv = d;      
      console.log("acerca works");
    });
    console.log(this.mostrarDiv);
  }


  //metodo para enviar al servicio que se comunica con la API
  update(form: any){
    this.acercaService.editar(this.id, form).subscribe();
    console.log(form);
    location.reload();
  }

  //metodo para enviar al servicio que se comunica con la API
  crear(form: any): void{
    this.acercaService.save(form).subscribe();
    console.log(form);
    location.reload();
  }

  //este metodo cierra los divs de "editar" y "nuevo"
  cerrar(){
    this.mostrarDiv = false;
    this.nuevo = false;
  }

  onClick(){
    console.log("funciona")
  }
}

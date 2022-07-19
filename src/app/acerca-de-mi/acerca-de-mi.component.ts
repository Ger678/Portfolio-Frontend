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
  tittle!: string;
  contenido!: string;
  icono!: string;
  object: Acerca =new Acerca(this.id, this.tittle, this.contenido, this.icono) ;
  mostrar!: boolean;
  titulo: string = "acerca";
  mostrarDiv!: boolean ;

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
    this.btnService.sendNombre(this.titulo);
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

  editarModel(){
      this.btnService.mostrarEditar(this.id, this.titulo).subscribe((d)=>{
      this.mostrarDiv = d;      
      console.log("acerca works");
    });
    console.log(this.mostrarDiv);
  }

  update(){
    
  }

  crear(): void{
    const acerca = new Acerca(this.id, this.titulo, this.contenido, this.icono);
    this.acercaService.save(acerca).subscribe();
  }

  cerrar(){
    this.mostrarDiv = false;
  }

  onClick(){
    console.log("funciona")
  }
}

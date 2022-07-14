import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BotonEditComponent } from '../accesorios/boton-edit/boton-edit.component';
import { Acerca } from '../models/acerca';
import { AcercaService } from '../service/acerca.service';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(
    private acercaService: AcercaService
  ) { }

  ngOnInit(): void {
    this.getAcercas();
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


  duplicar( elemento: HTMLElement ){
    return elemento.cloneNode
  }


  onClick(){
    console.log("funciona")
  }
}

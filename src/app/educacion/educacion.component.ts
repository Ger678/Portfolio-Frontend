import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
  animations: [
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
  ]
})
export class EducacionComponent implements OnInit {


  showDiv = false;
  titulo : string = "EDUCACION";
  lista: any = [];

  constructor() { }

  ngOnInit(): void {
  }


}
/*
export interface Info { 
  icono : any ="";
  titulo : string =  "";
  subtitulo : string = "";
}*/
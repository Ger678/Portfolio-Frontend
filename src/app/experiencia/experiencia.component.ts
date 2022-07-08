import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
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
export class ExperienciaComponent implements OnInit {

  titulo: string = "EXPERIENCIA";
  contenido : string = "Aprendiendo a programar desde hace 2 años.  Actividades y grupos: Desarrollamos 2 etapas. La primera #SeProgramar consistía en conocimiento de básico sobre programación, ejercicios prácticos y una visión inicial del POO. La segunda etapa #YoProgramo profundizamos conocimientos adquirimos habilidades y herramientas necesarias para convertirte en un programador web full-stack junior, también con un trabajo final integrador desarrollamos nuestro Portfolio web."
  icono : string = "";
  constructor() { }

  ngOnInit(): void {
  }

  

}

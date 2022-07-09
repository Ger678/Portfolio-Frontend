import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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

  showPort : boolean = false;
  portadaUrl: string = 'assets/img/fondo_ilustracion-fondo.svg';
  perfilUrl: string = 'assets/img/perfil.jpg';
  nombre: string = 'GERMAN';
  apellido: string = 'AGUIRRE';
  subtitulo: string = 'DESARROLLADOR WEB FULLSTACK';
  contenido: string = 'Soy estudiante de programacion web en Argentina Programa. Soy una persona autodidactada, y  siempre que puedo intento aprender nuevas tecnologias. Estoy buscando formar parte de un proyecto que me permita proyectarme profesionalmente y dejar mi marcar en la web.';

  toggle(event: any){
    console.log(event)
    this.showPort = this.showPort ? false : true;
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}

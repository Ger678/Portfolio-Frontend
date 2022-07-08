import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BotonEditComponent } from '../accesorios/boton-edit/boton-edit.component';

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
  titulo : string = "ACERCA DE MI"
  contenido : string = "Estudio programación desde 2021 y soy un aficionado al diseño grafico. Me encuentro entusiasmado con las posibilidades que brinda la programación y siendo muy curioso con el alcancé que tiene la tecnología siento que puedo desarrollarme y crecer profesionalmente en la insdustria IT. Actualmente sigo estudiando y adquiriendo habilidades para encontrar el trabajo que busco en esta insdustria.";
  icono: string = "assets/img/icons/grandes/icon_ACERCA.svg";


  constructor() { }

  ngOnInit(): void {
  }

  /*@HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;
    console.log(scrollPercentage)
    if (scrollPercentage >= 15) {
      this.showDiv = true;
      
    } else {
      this.showDiv = false;
    }
  }*/

  duplicar( elemento: HTMLElement ){
    return elemento.cloneNode
  }

  cambiarContenido(){
    this.titulo = "Acerca"
  }

  onClick(){
    console.log("funciona")
  }
}

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

  constructor() { }

  ngOnInit(): void {
  }

  

}

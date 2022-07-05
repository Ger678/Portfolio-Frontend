import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
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
export class SkillsComponent implements OnInit {

  showDiv = false;

  url: string = "\assets\img\icons\pequeños\HTML0.svg";
  title: string= "HTML5";
  subtitle: string = "Herramienta de trabajo";
  porcentaje: number = 63;



  constructor() { }

  ngOnInit(): void {
  }



  onModal(){
    
    console.log("modal")
  }



}

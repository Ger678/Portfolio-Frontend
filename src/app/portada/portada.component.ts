import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css'],
  animations: [
    trigger('entrada',[
      state('out', style({translateX: '-100%'})),
      state('in', style({translateX: '0%'})),
      transition('out => in', animate('500ms ease-in')),
      transition('in => out', animate('500ms ease-out'))
     ])

  ]
})
export class PortadaComponent implements OnInit {

  view = false;

  toggle(){
    this.view = !this.view;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

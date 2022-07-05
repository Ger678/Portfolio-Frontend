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

  toggle(event: any){
    console.log(event)
    this.showPort = this.showPort ? false : true;
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}

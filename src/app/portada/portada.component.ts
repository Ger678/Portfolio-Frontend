import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Portada } from '../models/portada';
import { PortadaService } from '../service/portada.service';
import { HttpErrorResponse } from '@angular/common/http';

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
  
  public ports: Portada [] = [];
  public editPort!: Portada;
  public borrarPort!: Portada;

  
  toggle(event: any){
    console.log(event)
    this.showPort = this.showPort ? false : true;
  }
 
  constructor(
    private portService: PortadaService
  ) { }

  ngOnInit(): void {
    this.lista();
  }

  lista(): void {
    this.portService.lista().subscribe(
     data => {
       this.ports = data;
     },
     error => {
       console.log(error);
     }
   );
  }

}

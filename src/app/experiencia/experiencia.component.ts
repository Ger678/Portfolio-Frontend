import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../service/experiencia.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
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


  public expes : Experiencia[] = [];
  public editExpe!: Experiencia;
  public borrarExpe!: Experiencia;

  constructor( private expeService: ExperienciaService) { }

  ngOnInit(): void {
    this.getExpe();
  }


  getExpe(): void {
     this.expeService.getExpe().subscribe(
      data => {
        this.expes = data;
      },
      error => {
        console.log(error);
      }
    );

    }
  }
  



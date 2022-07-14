import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Educacion } from '../models/educacion';
import { EducacionService } from '../service/educacion.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
  
})
export class EducacionComponent implements OnInit {


  titulo : string = "EDUCACION"; 

  public educs : Educacion[] = [];

  constructor( private educService : EducacionService) { }

  ngOnInit(): void {
    this.getEduc();
  }

  getEduc(): void {
    this.educService.getEduc().subscribe(
     data => {
       this.educs = data;
     },
     error => {
       console.log(error);
     }
   );
  }


}
/*
export interface Info { 
  icono : any ="";
  titulo : string =  "";
  subtitulo : string = "";
}*/
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SkillsService } from '../service/skills.service';
import { Skills } from '../models/skills';

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


  titulo: string= "HABILIDADES";
  idClick: number = 1;
  SIcono!: string;
  SNombre: string= "HTML";
  SDescripcion: string = "Lorem ipsum dolor sit amet, consectet, sed do eiusmod tempor incididunt ut labore et d";
  SFotos!: string;
  SPorcentaje: number= 19;
  show!: boolean;


  public skills: Skills [] = [];



  constructor(private skService: SkillsService) { }

  ngOnInit(): void {
    this.listaSkills();
  }

  public listaSkills(): void {
    this.skService.getSkills().subscribe(
      data => {
        this.skills = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onModal(id:number, icono: string, nombre:string, 
          descripcion: string, fotos: string, porcentaje: number) : void {
   
    this.idClick=id;
    this.SIcono = icono;
    this.SNombre = nombre;
    this.SDescripcion = descripcion;
    this.SFotos= fotos;
    this.SPorcentaje =porcentaje;
  }

  mostrarInfo() {
    this.show = true;
  }

}



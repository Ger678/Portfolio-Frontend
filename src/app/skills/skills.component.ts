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

  showDiv = false;

  titulo: string= "HABILIDADES";
  idClick: number = 1;
  SIcono!: string;
  SNombre!: string;
  SDescripcion!: string;
  SFotos!: string;
  SPorcentaje!: number;


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




}
function input() {
  throw new Error('Function not implemented.');
}


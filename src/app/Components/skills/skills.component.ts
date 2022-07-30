import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { SkillsService } from '../../service/skills.service';
import { Skills } from '../../models/skills';
import { BotonesService } from '../../service/botones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('inOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 1 }),
        animate(700),
      ]),
      transition(':leave', [
        animate(100, style({ transform: 'translateX(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class SkillsComponent implements OnInit {
  titulo: string = 'skills';
  idClick: number = 1;
  SIcono!: string;
  SNombre: string = 'HTML';
  SDescripcion: string =
    'Lorem ipsum dolor sit amet, consectet, sed do eiusmod tempor incididunt ut labore et d';
  SFotos!: string;
  SPorcentaje: number = 19;
  show!: boolean;

  editar!: boolean;
  nuevo!: boolean;
  index: number = 0;
  mostrar!: boolean;
  object!: any;
  id!: number;
  icono!: string;
  nombre!: string;
  tittle!: string;
  porcentaje!: number;

  public skills: Skills[] = [];

  constructor(
    private skService: SkillsService,
    private btnService: BotonesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listaSkills();
  }

  public listaSkills(): void {
    this.skService.getSkills().subscribe(
      (data) => {
        this.skills = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onModal(
    id: number,
    icono: string,
    nombre: string,
    descripcion: string,
    fotos: string,
    porcentaje: number
  ): void {
    this.idClick = id;
    this.SIcono = icono;
    this.SNombre = nombre;
    this.SDescripcion = descripcion;
    this.SFotos = fotos;
    this.SPorcentaje = porcentaje;
  }

  mostrarInfo() {
    this.show = true;
  }

  mostrarBtn(id: number): any {
    this.mostrar = true;
    this.btnService.sendId(id);
    this.recibeId();
    this.index = this.id - 1;
    this.btnService.sendBtn(this.mostrar);
    this.btnService.sendId(id);
    this.btnService.sendNombre(this.titulo);
    this.btnService.sendObject(this.object);
  }

  // estos 3 metodos los utilizo para abrir los divs de "edidar" y "agregar"

  //este metodo lo vinculo con el template
  mostrarEditarOrNuevo() {
    this.nuevoModel();
    this.editarModel();
  }

  //metodo para abrir el div "Agregar nuevo"
  nuevoModel() {
    this.btnService.mostrarNuevo(this.id, this.titulo).subscribe((data) => {
      this.nuevo = data;
    });
  }

  //metodo para abrir el div "Editar"
  editarModel() {
    this.btnService.recibeEditar().subscribe((d) => {
      this.editar = d;
    });
  }

  recibeId() {
    this.btnService.recibeId().subscribe((d) => {
      this.id = d;
    });
  }

  //metodo para enviar al servicio que se comunica con la API
  update(form: any) {
    this.skService.editar(this.id, form).subscribe();
    console.log(form);
    this.router.navigate(['/info']);
  }

  //metodo para enviar al servicio que se comunica con la API
  crear(form: any): void {
    this.skService.save(form).subscribe();
    console.log(form);
    this.router.navigate(['/info']);
  }

  //este metodo cierra los divs de "editar" y "nuevo"
  cerrar() {
    this.editar = false;
    this.nuevo = false;
    console.log('it works  ' + this.editar);
  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Educacion } from '../../models/educacion';
import { EducacionService } from '../../service/educacion.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BotonesService } from '../../service/botones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
  
})
export class EducacionComponent implements OnInit {


  tituloComponent : string = "educacion"; 
  mostrar!: boolean;
  editar: boolean=false;
  nuevo: boolean= false;
  itemId!: number;
  icono!: string;
  titulo!: string;
  fecha!: string;
  id!: number;
  index: number= 0;
  object!: any;

  public educs : Educacion[] = [];
  public educEditar!: Educacion;

  constructor( private educService : EducacionService,
   private btnService: BotonesService,
   private router: Router,) { }

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

  mostrarBtn(id: number):any{
    this.mostrar = true;
    this.btnService.sendId(id);
    this.recibeId();
    this.index = this.id - 1;
    this.btnService.sendBtn(this.mostrar);
    this.btnService.sendId(id);
    this.btnService.sendNombre(this.tituloComponent);
    this.btnService.sendObject(this.object);
    this.btnService.sendId(id);
    
  }

  // estos 3 metodos los utilizo para abrir los divs de "edidar" y "agregar"

  //este metodo lo vinculo con el template
  mostrarEditarOrNuevo(){
    this.nuevoModel();
    this.editarModel();
  }

  //metodo para abrir el div "Agregar nuevo"
  nuevoModel(){
    this.btnService.mostrarNuevo(this.id, this.tituloComponent).subscribe((data) => {
      this.nuevo = data;
    });
  }

  //metodo para abrir el div "Editar"
  editarModel(){
      this.btnService.recibeEditar().subscribe((d)=>{
      this.editar = d;
    });
  }

  recibeId(){
    this.btnService.recibeId().subscribe((d)=>{
      this.id = d;
    })
  }


  //metodo para enviar al servicio que se comunica con la API
  update(form: any){
    this.educService.editar(this.id, form).subscribe();
    console.log(form );
    this.router.navigate(['/info']);    
  }

  //metodo para enviar al servicio que se comunica con la API
  crear(form: any): void{
    this.educService.save(form).subscribe();
    console.log(form);
    this.router.navigate(['/info']);
  }

  //este metodo cierra los divs de "editar" y "nuevo"
  cerrar(){
    this.editar = false;
    this.nuevo = false;
    console.log("it works  " + this.editar)
  }

}
/*
export interface Info { 
  icono : any ="";
  titulo : string =  "";
  subtitulo : string = "";
}*/
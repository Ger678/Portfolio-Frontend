import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BotonEditComponent } from '../accesorios/boton-edit/boton-edit.component';

@Injectable({
  providedIn: 'root',
})
export class BotonesService {
  public url: string = 'https://guarded-peak-41981.herokuapp.com/';
  /* public url: any = window.document.location.href; */

  name!: string;
  id!: number;

  mostrar!: boolean;
  btnComponent!: BotonEditComponent;
  false: boolean = false;
  public subject: Subject<any> = new Subject<any>();
  public subjectId: Subject<any> = new Subject<number>();
  public subjectName: Subject<any> = new Subject<string>();
  public subjectModel: Subject<any> = new Subject<any>();
  public subjectEditar: Subject<any> = new Subject<any>();
  public sujectObject: Subject<any> = new Subject<any>();
  public subjectFalse: Subject<any> = new Subject<any>();
  public subjectLogged: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) {}

  //COMUNICACION CON LOS LOS COMPONENTES POR SUBJECTS

  ngOnInit(): void {}

  //send recibe Editar

  public sendEditar(dato: boolean): void {
    this.subjectEditar.next(dato);
  }

  public recibeEditar(): Observable<any> {
    console.log('aca paso por el btn servicio');
    return this.subjectEditar.asObservable();
  }

  //method to recibe name and id of the subject

  declararId() {
    this.recibeId().subscribe((d) => {
      this.id = d;
    });
    console.log('id recibido :' + this.id);
  }

  declararName() {
    this.recibeName().subscribe((d) => {
      this.name = d;
    });
    console.log('nombre recibido :' + this.name);
  }

  // declaracion de propiedades

  declararMostrar() {
    this.recibeEditar().subscribe((d) => {
      this.mostrar = d;
    });
    console.log('MOSTRAR: ' + this.mostrar);
  }

  mostrarEditar(id: number, nombre: string) {
    if (this.id == id && this.name == nombre) {
      console.log('paso la prueba');
      console.log(this.id, this.name, this.mostrar);
      return this.recibeEditar();
    } else {
      console.log('no paso la prueba');
      console.log(this.id, this.name);
      return this.subjectFalse.asObservable();
    }
  }

  mostrarNuevo(id: number, nombre: string) {
    if (this.id == id && this.name == nombre) {
      console.log('paso la prueba');
      console.log(this.id, this.name, this.mostrar);
      return this.recibeAgregar();
    } else {
      console.log('no paso la prueba');
      console.log(this.id, this.name);
      return this.subjectFalse.asObservable();
    }
  }

  //send recibe Logged

  public sendLogged(d: boolean) {
    this.subjectLogged.next(d);
  }

  public recibeLogged() {
    return this.subjectLogged.asObservable();
  }

  //send recibe Agregar

  public sendAgregar(dato: boolean) {
    this.subjectModel.next(dato);
  }

  public recibeAgregar(): Observable<boolean> {
    return this.subjectModel.asObservable();
  }

  //send recibe Name

  public sendNombre(nombre: string) {
    this.subjectName.next(nombre);
  }

  public recibeName(): Observable<string> {
    return this.subjectName.asObservable();
  }

  //send recibe Id

  public sendId(id: any) {
    this.subjectId.next(id);
  }

  public recibeId(): Observable<number> {
    return this.subjectId.asObservable();
  }

  //send recibe Object

  public sendObject(object: any) {
    this.sujectObject.next(object);
  }

  public recibeObject(): Observable<any> {
    return this.sujectObject.asObservable();
  }

  //send recibe Boton

  public sendBtn(dato: any) {
    this.subject.next(dato);
  }

  public recibeBtn(): Observable<boolean> {
    return this.subject.asObservable();
  }

  //send recibe False

  public sendFalse(dato: boolean) {
    this.subject.next(dato);
  }

  public recibeFalse(): Observable<boolean> {
    return this.subject.asObservable();
  }

  // FUNCIONES BASICAS DEL CRUD

  public save(nombre: string, object: any): Observable<any> {
    return this.http.post<any>(this.url + nombre + '/crear', object);
  }

  public editar(id: number, nombre: string, object: any): Observable<any> {
    const editar = this.url + nombre + `/editar/${id}` + object;
    console.log(editar);
    return this.http.put<any>(this.url + nombre + `/editar/${id}`, object);
  }

  public delete(id: number, nombre: string): Observable<void> {
    const borrar = this.url + nombre + `/delete/${id}`;
    return this.http.delete<void>(borrar);
  }
}

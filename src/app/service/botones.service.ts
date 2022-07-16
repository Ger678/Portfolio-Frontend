import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotonesService {

  @Input() object!: String;

  public url : string = 'http://localhost:8180/'
  
  
  constructor( private http: HttpClient) { }

  public save(nombre: string, object: any): Observable<any>{
    return this.http.post<any>(this.url + nombre +'/crear', object);
  }

  public editar(id: number, nombre: string, object: any): Observable<any>{
    return this.http.put<any>(this.url + nombre + `/editar/${id}` , object);
  }

  public delete(id: number, nombre: string): Observable<any>{    
    const borrar = this.url + nombre + `/borrar/${id}`;
    console.log(borrar);
    return this.http.delete<any>(borrar);    
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portada } from '../models/portada';

@Injectable({
  providedIn: 'root'
})
export class PortadaService {

  portadaUrl = 'http://localhost:8180/portada/'

  constructor(private httpCLiente: HttpClient) { }

  public lista(): Observable<Portada[]>{
    return this.httpCLiente.get<Portada[]>(this.portadaUrl + 'traer')
  }

  public save(portada: Portada): Observable<any>{
    return this.httpCLiente.post<any>(this.portadaUrl + 'crear', portada);
  }

  public editar(id: number, portada: Portada): Observable<any>{
    return this.httpCLiente.put<any>(this.portadaUrl + `editar/${id}` , portada);
  }

  public delete(id: number): Observable<any>{
    return this.httpCLiente.delete<any>(this.portadaUrl + `borrar/${id}`);
  }



}

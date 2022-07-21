import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private expeUrl = 'http://localhost:8180/experiencia/'

  constructor( private http: HttpClient) { }

  public getExpe(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.expeUrl + 'traer')
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.expeUrl + 'crear', experiencia);
  }

  public editar(id: number, experiencia: Experiencia): Observable<any>{
    return this.http.put<any>(this.expeUrl + `update/${id}` , experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expeUrl + `borrar/${id}`);
  }
}

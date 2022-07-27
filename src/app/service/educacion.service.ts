import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private educUrl = 'https://guarded-peak-41981.herokuapp.com/educacion/'

  constructor( private http: HttpClient) { }

  public getEduc(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.educUrl + 'traer')
  }

  public save(experiencia: Educacion): Observable<any>{
    return this.http.post<any>(this.educUrl + 'crear', experiencia);
  }

  public editar(id: number, experiencia: Educacion): Observable<any>{
    return this.http.put<any>(this.educUrl + `update/${id}` , experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.educUrl + `delete/${id}`);
  }

}

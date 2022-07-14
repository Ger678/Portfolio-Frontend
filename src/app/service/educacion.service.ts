import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private educUrl = 'http://localhost:8180/educacion/'

  constructor( private http: HttpClient) { }

  public getEduc(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.educUrl + 'traer')
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skillsUrl = 'http://localhost:8180/skills/'

  constructor( private http: HttpClient ) { }

  public getSkills(): Observable<Skills[]>{
    return this.http.get<Skills[]>(this.skillsUrl + 'traer')
  }

  public getById(id: number): Observable<Skills>{
    return this.http.get<Skills>(this.skillsUrl  + 'traer/' + id)
  }
} 


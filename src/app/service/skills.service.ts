import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skillsUrl = 'https://guarded-peak-41981.herokuapp.com/skills/';

  constructor(private http: HttpClient) {}

  public getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.skillsUrl + 'traer');
  }

  public getById(id: number): Observable<Skills> {
    return this.http.get<Skills>(this.skillsUrl + 'traer/' + id);
  }

  public save(sk: Skills): Observable<any> {
    return this.http.post<any>(this.skillsUrl + 'crear', sk);
  }

  public editar(id: number, sk: Skills): Observable<any> {
    return this.http.put<any>(this.skillsUrl + `update/${id}`, sk);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.skillsUrl + `delete/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca } from '../models/acerca';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {

  private acercaUrl = 'https://guarded-peak-41981.herokuapp.com/acerca/'

  constructor( private httpCLiente : HttpClient ) { }

  public lista():Observable<Acerca[]>{
    return this.httpCLiente.get<Acerca[]>(this.acercaUrl + 'traer')
  }

  public save(acerca: Acerca): Observable<any>{
    return this.httpCLiente.post<any>(this.acercaUrl + 'crear', acerca);
  }

  public editar(id: number, acerca: Acerca): Observable<any>{
    return this.httpCLiente.put<any>(this.acercaUrl + `update/${id}` , acerca);
  }

  public delete(id: number): Observable<any>{
    return this.httpCLiente.delete<any>(this.acercaUrl + `delete/${id}`);
  }
  
}

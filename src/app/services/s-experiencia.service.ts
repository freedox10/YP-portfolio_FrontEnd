import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = 'http://localhost:8080/explab/'

/*<<<<<<< HEAD
  expURL = 'https://backend-mgb.herokuapp.com/explab/';
=======
  URL = environment.URL + 'explab/';
>>>>>>> dbccedd5c18384aa757cbb7ab7d9f7f3bc0e7672
*/
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detalle/${id}`);
  } 

      public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `borarr/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'crear', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `actual/${id}`, experiencia);
  }
}

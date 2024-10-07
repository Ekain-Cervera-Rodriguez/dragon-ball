import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {
  private api_planetas = 'https://dragonball-api.com/api/planets?limit=20';

  constructor(private http: HttpClient) {
    
  }

  obtenerPersonajes(): Observable<any>{
    return this.http.get(this.api_planetas);
  }
}

export interface Planeta {
  id: number;
  name: string;
  description: string;
  characters: string[]; 
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private api_characters = "https://dragonball-api.com/api/characters";

  characters: any = [];

  constructor(private http: HttpClient) {
    this.characters = [];
   }

    obtenerPersonajes(): Observable<any>{
      return this.http.get(`${this.api_characters}?limit=58`);
    }

    

    verInfo(id: string): Observable<any>{
      return this.http.get(`${this.api_characters}/${id}`);
    }

}
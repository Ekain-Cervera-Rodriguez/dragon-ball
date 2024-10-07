import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from "./characters/characters.component";
import { PlanetasComponent } from "./planetas/planetas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    HttpClientModule, 
    CharactersComponent, 
    PlanetasComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  private readonly baseURL='http://localhost:4200/characters'

  constructor(
    private readonly http: HttpClient
  ){}
  ngOnInit(): void {
    this.http.get('baseURL');
  }
  
}

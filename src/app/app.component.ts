import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from "./characters/characters.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, CharactersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  private readonly baseURL='http://localhost:4200/guerreros'

  constructor(
    private readonly http: HttpClient
  ){}
  ngOnInit(): void {
    this.http.get('baseURL');
  }
  
}

//iamgenes, id, metodo onclickicon
import { Component, OnInit } from '@angular/core';
import { CharactersService} from '../characters/characters.service';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RouterLink,
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{

  characters: any = []; 

  constructor(private service: CharactersService){

  }

  ngOnInit(): void {
    this.service.obtenerPersonajes().subscribe( resp =>{
      this.characters = resp.items;
      console.log(this.characters)
    })
  }









  
  
}


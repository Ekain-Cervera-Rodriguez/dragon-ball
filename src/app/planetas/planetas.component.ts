import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlanetasService } from './planetas.service';

@Component({
  selector: 'app-planetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planetas.component.html',
  styleUrl: './planetas.component.css'
})
export class PlanetasComponent implements OnInit{

  planetas: any = [];

  constructor(private service: PlanetasService){

  }

  ngOnInit(): void {
    this.service.obtenerPersonajes().subscribe( resp =>{
      this.planetas = resp.items;
      console.log(this.planetas)
    })
  }
}

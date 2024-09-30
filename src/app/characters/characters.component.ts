import { Component, OnInit } from '@angular/core';
import { CharactersService} from '../characters/characters.service';
import { CommonModule} from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent  implements OnInit{

  characters: any[] = [];

  limit: number = 1;

  filtro: any;

  constructor(private servicio: CharactersService, private fb: FormBuilder){
    this.filtro = this.fb.group({
      limit:['10', [Validators.max(100)]],
    affiliation: ['']
    })
  }
  ngOnInit(): void {
    this.cargardatos();
  }
  cargardatos(){
    this.servicio.obtenerdatos(this.filtro.value).subscribe((res: any) => {  
      this.characters = res;
      })
  }


  filtrar() {
    console.log(this.filtro.value);
    this.cargardatos();
    this.enviar()
    }

    enviar(){
      this.servicio.enviardatos(this.filtro.value).subscribe((rest: any) => {
        console.log(rest);
      });
    }

    mostrarPersonaje(id: number){
      this.servicio.obtenerPersonaje(id).subscribe((res: any) => {
        console.log(res);
      });
      this.servicio.actualizarPersonaje(this.filtro.value , id).subscribe((res: any) => {
        console.log(res);
      });
    }

}
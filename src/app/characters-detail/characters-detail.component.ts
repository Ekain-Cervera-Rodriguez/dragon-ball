import { Component } from '@angular/core';
import { CharactersComponent } from '../characters/characters.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../characters/characters.service';

@Component({
  selector: 'app-characters-detail',
  standalone: true,
  imports: [
    CharactersComponent,
    CommonModule,
  ],
  templateUrl: './characters-detail.component.html',
  styleUrl: './characters-detail.component.css'
})
export class CharactersDetailComponent {

  character: any;
  
  characters: any = [];

  constructor(private route: ActivatedRoute, public service: CharactersService){

  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.service.verInfo(id).subscribe( resp =>{
      this.character = resp;
      console.log(this.character);
    })
  }

}

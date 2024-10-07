import { Routes } from '@angular/router';
import { PlanetasComponent } from './planetas/planetas.component';
import { CharactersComponent } from './characters/characters.component';

export const routes: Routes = [
  { path: 'planetas', component: PlanetasComponent },
  { path: 'characters', component: CharactersComponent },
];
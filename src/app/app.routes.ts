import { Routes } from '@angular/router';
import { PlanetasComponent } from './planetas/planetas.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { PlanetasDetailComponent } from './planetas-detail/planetas-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'planetas', component: PlanetasComponent },
  { path: 'characters/:id', component: CharactersDetailComponent},
  { path: 'planetas/:id', component: PlanetasDetailComponent}

];
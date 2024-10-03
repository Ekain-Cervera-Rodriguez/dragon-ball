import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-planetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planetas.component.html',
  styleUrl: './planetas.component.css'
})
export class PlanetasComponent {
planetas: any[] = [];
mostrarPlaneta(arg0: any) {
throw new Error('Method not implemented.');
}

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuerrerosComponent } from './guerreros/guerreros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GuerrerosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}

//iamgenes, id, metodo onclickicon
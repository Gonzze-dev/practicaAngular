import { Component } from '@angular/core';

import { NavComponent } from './Components/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';


@Component({
  selector: 'app-root',
  imports: [
    NavComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'Aerolab-chall-Angular';
  

}

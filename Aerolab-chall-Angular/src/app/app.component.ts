import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductListComponent } from './Components/product-list/product-list.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavComponent } from './Components/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProductListComponent,
    NavComponent,
    ToolbarComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'Aerolab-chall-Angular';
  

}

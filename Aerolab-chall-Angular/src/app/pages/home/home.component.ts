import { Component } from '@angular/core';

import { ProductListComponent } from '../../Components/product-list/product-list.component';
import { ToolbarComponent } from '../../Components/toolbar/toolbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';


@Component({
  selector: 'app-home',
  imports: [
    ProductListComponent,
    ToolbarComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

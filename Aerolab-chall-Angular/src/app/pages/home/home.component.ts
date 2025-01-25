import { Component } from '@angular/core';

import { ProductListComponent } from '../../Components/product-list/product-list.component';
import { ToolbarComponent } from '../../Components/toolbar/toolbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { CategoryComponent } from '../../Components/category/category.component';


@Component({
  selector: 'app-home',
  imports: [
    ProductListComponent,
    ToolbarComponent,
    FooterComponent,
    CategoryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

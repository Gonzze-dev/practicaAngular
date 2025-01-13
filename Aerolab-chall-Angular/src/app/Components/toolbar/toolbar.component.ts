import { Component, inject } from '@angular/core';
import { ProductsService } from '../../Service/Product/products.service';
import { Filter } from '../../Type/Filter';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  productService = inject(ProductsService)

  selectFilter(option: Filter){
    this.productService.filter({option: option})
  }

  next()
  {
    this.productService.nextPage()
  }

  prev()
  {
    this.productService.prevPage()
  }
}

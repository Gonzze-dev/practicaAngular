import { Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../Service/products.service';
import { Filter } from '../../Type/Filter';
import { ButtonComponent } from '../../UI/button/button.component';
import { ButtonImgComponent } from '../../UI/button-img/button-img.component';

@Component({
  selector: 'app-toolbar',
  imports: [
    ButtonComponent,
    ButtonImgComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  
  productService = inject(ProductsService)
  filter = signal<Filter>('mostrecent')

  selectFilter(option: Filter){
    this.productService.filterBy({option: option})
    this.filter.set(option)
  }

  next()
  {
    this.productService.nextPage()
    console.log(this.productService.response().data)
  }

  prev()
  {
    this.productService.prevPage()
  }
}

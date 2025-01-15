import { Component, inject } from '@angular/core';
import { ProductsService } from '../../Service/products.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  productService = inject(ProductsService)

  next()
  {
    this.productService.nextPage()
  }

  prev()
  {
    this.productService.prevPage()
  }
}

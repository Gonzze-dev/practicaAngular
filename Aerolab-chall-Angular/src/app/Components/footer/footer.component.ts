import { Component, inject } from '@angular/core';
import { ProductsService } from '../../Service/products.service';
import { ButtonImgComponent } from '../../UI/button-img/button-img.component';

@Component({
  selector: 'app-footer',
  imports: [
    ButtonImgComponent
  ],
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

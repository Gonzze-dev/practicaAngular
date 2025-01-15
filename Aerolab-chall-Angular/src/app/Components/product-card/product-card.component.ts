import { Component, inject, input, signal } from '@angular/core';
import { IProduct } from '../../Interface/IProduct';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = input.required<IProduct>()
  protected userService = inject(UserService)

  reedem(){
    const productId = this.product()._id
    this.userService.reedemPoints(productId)
    
  }
}

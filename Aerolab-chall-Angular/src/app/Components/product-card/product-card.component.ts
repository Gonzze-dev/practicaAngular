import { Component, input, signal } from '@angular/core';
import { IProduct } from '../../Interface/IProduct';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = input.required<IProduct>()

}

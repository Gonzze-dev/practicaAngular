import { Component, input } from '@angular/core';
import { IProduct } from '../../Interface/IProduct';

@Component({
  selector: 'app-product-reedem-card',
  imports: [],
  templateUrl: './product-reedem-card.component.html',
  styleUrl: './product-reedem-card.component.css'
})
export class ProductReedemCardComponent {
  product = input.required<IProduct>()
}

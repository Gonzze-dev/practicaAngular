import { Component, computed, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../../Service/products.service';
import { IProduct } from '../../Interface/IProduct';

import { IResponse } from '../../Interface/IResponse';
import { IPaginatedData } from '../../Interface/IPaginatedData';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productService = inject(ProductsService)

  response = computed<IResponse<IPaginatedData<IProduct[]>>>(() => 
    this.productService.response()
  )


}

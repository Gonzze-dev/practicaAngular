import { Component, computed, inject } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { IProduct } from '../../Interface/IProduct';
import { IResponse } from '../../Interface/IResponse';
import { ProductReedemCardComponent } from '../../Components/product-reedem-card/product-reedem-card.component';
import { CategoryComponent } from '../../Components/category/category.component';

@Component({
  selector: 'app-history',
  imports: [
    ProductReedemCardComponent,
    CategoryComponent
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',

})
export class HistoryComponent  {
  userService = inject(UserService)
  history = computed<IResponse<IProduct[]>>(() => this.userService.history())

  constructor(){
    this.userService.getHistory()
  }
}

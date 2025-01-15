import { Component, computed, inject, signal } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { IProduct } from '../../Interface/IProduct';
import { IResponse } from '../../Interface/IResponse';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent  {
  userService = inject(UserService)
  history = computed<IResponse<IProduct[]>>(() => this.userService.history())

  constructor(){
    this.userService.getHistory()
  }
}

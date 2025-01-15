import { Component, computed, inject, OnInit } from '@angular/core';
import { IResponse } from '../../Interface/IResponse';
import { IUser } from '../../Interface/IUser';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  userService = inject(UserService)

  user = computed<IResponse<IUser>>(() => this.userService.user())

  addPoints()
  {
    this.userService.addPoints()
  }
}

import { ChangeDetectionStrategy, Component, computed, inject, OnDestroy, OnInit } from '@angular/core';
import { IResponse } from '../../Interface/IResponse';
import { IUser } from '../../Interface/IUser';
import { UserService } from '../../Service/user.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  public userService = inject(UserService)

  user = computed<IResponse<IUser>>(() => this.userService.user());
  
  addPoints()
  {
    this.userService.addPoints()
  }
}

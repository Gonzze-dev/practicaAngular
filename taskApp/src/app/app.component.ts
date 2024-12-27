import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCardDetailComponent } from './task-card-detail/task-card-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    TaskListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskApp';
}
